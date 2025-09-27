import { registerEnumType } from '@nestjs/graphql';

export enum ItemCategoriesScalarFieldEnum {
    id = "id",
    pocket_id = "pocket_id",
    identifier = "identifier"
}


registerEnumType(ItemCategoriesScalarFieldEnum, { name: 'ItemCategoriesScalarFieldEnum', description: undefined })
