import { ApiProperty } from '@nestjs/swagger';

import { Size } from '@prisma/client';


export class AttributesDto {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  height: number;

  @ApiProperty()
  weight: number;

  @ApiProperty()
  age: number;

  @ApiProperty()
  sizeTop: Size;

  @ApiProperty()
  sizeBottom: Size;
}
