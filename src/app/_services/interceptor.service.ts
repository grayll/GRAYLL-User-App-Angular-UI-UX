import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment as env } from '../../environments/environment';
import { LoadingService } from './loading.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  activeRequests: number = 0;

  constructor(
    private loadingService: LoadingService
  ) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if(this.activeRequests===0){
      this.loadingService.show();
    }
    this.activeRequests;

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // logic if
        }
        if(this.activeRequests===0){
          this.loadingService.hide();
        }
        this.activeRequests--;
        return event;
      }),

      catchError((error: HttpErrorResponse) => {
        let data: any = {};
        if (error.error instanceof ErrorEvent) {
          // client-side error
          data = {
            reason: error.error.message,
            status: null
          };
        } else {
          // server-side error
          data = {
            reason: error && ((error.error && error.error.msg) || error.message) ? (error.error.msg || error.message) : 'Seems like your internet is not working properly. Please Try Again',
            status: error.status
          };
        }
        if(this.activeRequests===0){
          this.loadingService.hide();
        }
        this.activeRequests--;
        return throwError(data);
      })
    );
  }

}
