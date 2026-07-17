import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TypesCreateNestedOneWithoutEfficacyInput } from '../types/types-create-nested-one-without-efficacy.input';

@InputType()
export class TypeEfficacyCreateWithoutTargetTypeInput {

    @Field(() => Int, {nullable:false})
    damage_factor!: number;

    @Field(() => TypesCreateNestedOneWithoutEfficacyInput, {nullable:false})
    damageType!: TypesCreateNestedOneWithoutEfficacyInput;
}
