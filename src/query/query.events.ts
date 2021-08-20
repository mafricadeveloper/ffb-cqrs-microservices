export class QueryEvent {
  constructor(
    public readonly queryTransactionGUID: string,
    public readonly queryName: string,
  ) {}
}
export class QueryEventSuccess {
  constructor(
    public readonly queryTransactionGUID: string,
    public readonly queryName: string,
  ) {}
}
export class QueryEventFail {
  constructor(
    public readonly queryTransactionGUID: string,
    public readonly error: object,
  ) {}
}
