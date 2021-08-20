export class QueryCommand {
  constructor(
    public readonly queryTransactionGUID: string,
    public readonly queryName: string,
  ) {}
}
