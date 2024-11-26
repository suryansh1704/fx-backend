import { ApiProperty } from "@nestjs/swagger";

import { PreferenceType } from "@prisma/client";
import { Color } from "@prisma/client";

export class PreferencesDto {
    @ApiProperty()
    userId: string;

    @ApiProperty()
    type: PreferenceType;

    @ApiProperty()
    color: Color[] ;
}