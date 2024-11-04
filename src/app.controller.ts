import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola!';
  }

  @Get('new')
  newEndpoint(): string {
    return 'Nuevo endpoint';
  }

  @Get('/ruta/')
  nuevoMetodo(): string {
    return 'Nuevo metodo /*****/';
  }

  @Get('products')
  getProducts(@Query('limit') limit: number, @Query('offset') offset: number, @Query('brand') brand: string){
    return `products: limit => ${limit}, offset => ${offset}, brand => ${brand}`;
  }

  @Get('products/:id')
  getProduct(@Param('id') id: string): string {
    return `Product ${id}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ): string {
    return `Category ${id} - Product ${productId}`;
  }
}
