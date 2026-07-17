import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesCreateNestedOneWithoutEfficacyTargetInput } from '../types/types-create-nested-one-without-efficacy-target.input';

@InputType()
export class TypeEfficacyCreateWithoutDamageTypeInput {

    @Field(() => Int, {nullable:false})
    damage_factor!: number;

    @Field(() => TypesCreateNestedOneWithoutEfficacyTargetInput, {nullable:false})
    targetType!: Identity<TypesCreateNestedOneWithoutEfficacyTargetInput>;
}
