import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesUncheckedUpdateManyWithoutDamageClassNestedInput } from '../types/types-unchecked-update-many-without-damage-class-nested.input';

@InputType()
export class MoveDamageClassesUncheckedUpdateWithoutMovesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => TypesUncheckedUpdateManyWithoutDamageClassNestedInput, {nullable:true})
    types?: Identity<TypesUncheckedUpdateManyWithoutDamageClassNestedInput>;
}
