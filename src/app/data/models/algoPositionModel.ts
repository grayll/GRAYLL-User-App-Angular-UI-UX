export class AlgoPositionModel {
	constructor(
		public id?: number,
		public openDate?: any,
		public status?: string,
		public duration?: number,
		public algorithm?: string,
		public priceUSD?: number,
		public priceGRQ?: number,
		public positionValueUSD?: string,
		public positionProfitUSD?: string,
		public roi?: number,
		public grayllTransactionId?: string,
		public nearTransactionId?: string
	) {}
}
