import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
// import { CreateBookDto } from './dto/create-book.dto';
// import { UpdateBookDto } from './dto/update-book.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
// import { CreateBookCommand } from './commands/create-site/create-site.command';
// import { UpdateBookCommand } from './commands/update-site/update-site.command';
// import { DeleteBookCommand } from './commands/delete-site/delete-site.command';
import { ListSitesQuery } from './queries/list-sites/list-sites.query';
import { GetSiteQuery } from './queries/get-site/get-site.query';

@Controller('sites')
export class SitesController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  // @Post()
  // create(@Body() createBookDto: CreateBookDto) {
  //   return this.commandBus.execute(new CreateBookCommand(createBookDto));
  // }

  @Get(':year/:month')
  findAll(@Param('year') year: string, @Param('month') month: string) {
    return this.queryBus.execute(new ListSitesQuery(year, month));
  }

  @Get(':name/:year/:month')
  findOne(
    @Param('name') name: string,
    @Param('year') year: string,
    @Param('month') month: string,
  ) {
    return this.queryBus.execute(new GetSiteQuery(name, year, month));
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
  //   return this.commandBus.execute(new UpdateBookCommand(id, updateBookDto));
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.commandBus.execute(new DeleteBookCommand(id));
  // }
}
