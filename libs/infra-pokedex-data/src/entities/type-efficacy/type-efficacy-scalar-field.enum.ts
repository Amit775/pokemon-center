import { registerEnumType } from '@nestjs/graphql';

export enum TypeEfficacyScalarFieldEnum {
    damage_type_id = "damage_type_id",
    target_type_id = "target_type_id",
    damage_factor = "damage_factor"
}


registerEnumType(TypeEfficacyScalarFieldEnum, { name: 'TypeEfficacyScalarFieldEnum', description: undefined })
