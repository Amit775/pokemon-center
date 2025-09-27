import { registerEnumType } from '@nestjs/graphql';

export enum TypesScalarFieldEnum {
    id = "id",
    identifier = "identifier",
    generation_id = "generation_id",
    damage_class_id = "damage_class_id"
}


registerEnumType(TypesScalarFieldEnum, { name: 'TypesScalarFieldEnum', description: undefined })
