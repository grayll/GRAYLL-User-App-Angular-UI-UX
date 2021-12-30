export class WithdrawModel {
  constructor(
    public address?: string,
    public grqAmount?: number,
    public nearAmount?: number,
    public memoMessage?: string,
    public phoneNumber?: string,
    public emailAddress?: string
  ) {}
}
