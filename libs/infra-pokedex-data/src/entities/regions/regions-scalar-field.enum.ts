import { registerEnumType } from '@nestjs/graphql';

export enum RegionsScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(RegionsScalarFieldEnum, { name: 'RegionsScalarFieldEnum', description: undefined })
