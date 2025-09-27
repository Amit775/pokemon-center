import { registerEnumType } from '@nestjs/graphql';

export enum MoveMetaCategoriesScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(MoveMetaCategoriesScalarFieldEnum, { name: 'MoveMetaCategoriesScalarFieldEnum', description: undefined })
