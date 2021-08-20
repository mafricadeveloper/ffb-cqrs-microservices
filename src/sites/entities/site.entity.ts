import { AggregateRoot } from '@nestjs/cqrs';
import {
  UnprocessableEntityException,
  InternalServerErrorException,
} from '@nestjs/common';
export class Site extends AggregateRoot {
  constructor(
    public id: string,
    public name: string,
    public production: string,
  ) {
    super();
    this.validate();
  }

  validate(): void {
    if (!this.id) {
      throw new InternalServerErrorException();
    }

    if (!this.name || !this.production) {
      throw new UnprocessableEntityException();
    }

    if (this.name.length < 3) {
      throw new UnprocessableEntityException(
        'Name must contain at least three letters.',
      );
    }
  }
}
