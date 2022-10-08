import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateItemsDto } from './dto/items-create.dto';
import { Item } from './interfaces/item.interface';
import { ItemsService } from './items.service';
@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }
    @Get()
    async findAll(): Promise<Item[]> {
        return await this.itemsService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id') id): Promise<Item> {
        return await this.itemsService.findOne(id);
    }

    // @Post()
    // create(@Body() createitemsDto: CreateItemsDto): string {
    //     return `Name: ${createitemsDto.name} description: ${createitemsDto.description} qty: ${createitemsDto.qty}`
    // }
    // @Put(':id')
    // update(@Body() updateItemsDto: CreateItemsDto, @Param('id') id): string {
    //     return `Id: ${id} Updated: ${updateItemsDto.name} Description: ${updateItemsDto.description} qty: ${updateItemsDto.qty}`
    // }
    // @Delete(':id')
    // delete(@Param('id') id): string {
    //     return `Deleted: ${id}`;
    // }
}
