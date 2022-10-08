import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateItemsDto } from './dto/items-create.dto';
@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return "Get all items";
    }
    @Get(':id')
    findOne(@Param('id') id): string {
        return `Name: ${id}`;
    }

    @Post()
    create(@Body() createitemsDto: CreateItemsDto): string {
        return `Name: ${createitemsDto.name} description: ${createitemsDto.description} qty: ${createitemsDto.qty}`
    }
    @Put(':id')
    update(@Body() updateItemsDto: CreateItemsDto, @Param('id') id): string {
        return `Id: ${id} Updated: ${updateItemsDto.name} Description: ${updateItemsDto.description} qty: ${updateItemsDto.qty}`
    }
    @Delete(':id')
    delete(@Param('id') id): string {
        return `Deleted: ${id}`;
    }
}
