import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class TypeEfficacyUncheckedCreateWithoutDamageTypeInput {

    @Field(() => Int, {nullable:false})
    target_type_id!: number;

    @Field(() => Int, {nullable:false})
    damage_factor!: number;
}
