import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import {
  QueryEvent,
  QueryEventFail,
  QueryEventSuccess,
} from '../query/query.events';
import { QueryCommand } from './query.command';
@Injectable()
export class QuerySaga {
  @Saga()
  createQuery = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(QueryEvent),
      map((event: QueryEvent) => {
        return new QueryCommand(event.queryTransactionGUID, event.queryName);
      }),
    );
  };

  @Saga()
  createQuerySuccess = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(QueryEventSuccess),
      flatMap((event: QueryEventSuccess) => {
        // tslint:disable-next-line:no-console
        console.log('Query Successed');
        return [];
      }),
    );
  };
  @Saga()
  createQueryFail = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(QueryEventFail),
      flatMap((event: QueryEventFail) => {
        // tslint:disable-next-line:no-console
        console.log('Query Failed');
        return [];
      }),
    );
  };
}
