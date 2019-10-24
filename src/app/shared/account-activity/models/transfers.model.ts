export class TransfersModel {
  constructor(
    public id?: number,
    public date?: any,
    public counterparty?: string,
    public asset?: string,
    public issuer?: string,
    public amount?: string
  ) {}
}
