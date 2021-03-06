export class OrderModel {
  constructor(
    public id?: number,
    public date?: any,
    public type?: string,
    public asset?: string,
    public issuer?: string,
    public amount?: string,
    public filled?: string,
    public price?: string,
    public priceUSD?: string,
    public totalPriceUSD?: string,
    public totalPrice?: string
  ) { }
}
