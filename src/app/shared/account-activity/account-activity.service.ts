import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { OrderModel } from './models/order.model';
import { TransfersModel } from './models/transfers.model';
import { NetworkHistoryModel } from './models/network-history.model';
import { AlgoliaService } from 'src/app/algolia.service';
import { Index, QueryParameters } from "algoliasearch";

@Injectable({
  providedIn: 'root'
})
export class AccountActivityService {

  private orders$: Observable<OrderModel[]>;
  OrderCollection: AngularFirestoreCollection<OrderModel>;
  get orders(){
    return this.orders$;
  }
  private index: Index;
  
  private transfers$: Observable<TransfersModel[]>;
  transfersCollection: AngularFirestoreCollection<TransfersModel>;
  get transfers(){
    return this.transfers$;
  }

  private networkHistory$: Observable<NetworkHistoryModel[]>;
  networkHistoryCollection: AngularFirestoreCollection<NetworkHistoryModel>;
  get networkHistory(){
    return this.networkHistory$;
  }

  constructor(private afs: AngularFirestore, private algolia: AlgoliaService) {
    this.OrderCollection = afs.collection<OrderModel>('orders');
    this.orders$ = this.OrderCollection.valueChanges();
    this.transfersCollection = afs.collection<TransfersModel>('transfers');
    this.transfers$ = this.transfersCollection.valueChanges();
    this.networkHistoryCollection = afs.collection<NetworkHistoryModel>('networkHistory');
    this.networkHistory$ = this.networkHistoryCollection.valueChanges();
  }

  search(type,params:QueryParameters){
    if(type==='networkHistory'){
      this.index = this.algolia.initializeIndex('networkHistory');
    }
    else if(type==='transfers'){
      this.index = this.algolia.initializeIndex('transfers');
    }
    else{
      this.index = this.algolia.initializeIndex('orders');
    }
    return this.index.search(params);
  }
  
  addOrder(item: OrderModel) {
    this.OrderCollection.add(item);
  }

  addTransfer(item: TransfersModel) {
    this.transfersCollection.add(item);
  }

  addNetworkHistory(item: NetworkHistoryModel) {
    console.log(item);
    this.networkHistoryCollection.add(item);
  }

}
