import { HttpService } from '@nestjs/axios';
import { Site } from '../entities/site.entity';
// import { UpdateBookDto } from '../dto/update-book.dto';
// import { CreateBookDto } from '../dto/create-book.dto';

export abstract class SiteRepository {
  abstract findOneByName(
    name: string,
    year: string,
    month: string,
  ): Promise<Site>;
  abstract findAll(year: string, month: string): Promise<Site[]>;

  // abstract create(id: string, payload: CreateBookDto): Promise<void>;
  // abstract delete(id: string): Promise<void>;
  // abstract update(id: string, payload: UpdateBookDto): Promise<void>;
}
