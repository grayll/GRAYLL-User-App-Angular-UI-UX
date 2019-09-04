export class AlgoNotificationModel {
  constructor(
    public id?: number,
    public subject?: string,
    public content?: string,
    public positionId?: number,
    public isRead?: boolean,
    public datetime?: any
  ) {}
}

export class WalletNotificationModel {
  constructor(
    public id?: number,
    public subject?: string,
    public content?: string,
    public positionId?: number,
    public isRead?: boolean,
    public datetime?: any
  ) {}
}

export class SystemNotificationModel {
  constructor(
    public id?: number,
    public subject?: string,
    public content?: string,
    public positionId?: number,
    public isRead?: boolean,
    public datetime?: any
  ) {}
}
