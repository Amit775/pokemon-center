import { registerEnumType } from '@nestjs/graphql';

export enum MovesScalarFieldEnum {
    id = "id",
    identifier = "identifier",
    generation_id = "generation_id",
    type_id = "type_id",
    power = "power",
    pp = "pp",
    accuracy = "accuracy",
    priority = "priority",
    target_id = "target_id",
    damage_class_id = "damage_class_id",
    effect_id = "effect_id",
    effect_chance = "effect_chance",
    contest_type_id = "contest_type_id",
    contest_effect_id = "contest_effect_id",
    super_contest_effect_id = "super_contest_effect_id"
}


registerEnumType(MovesScalarFieldEnum, { name: 'MovesScalarFieldEnum', description: undefined })
