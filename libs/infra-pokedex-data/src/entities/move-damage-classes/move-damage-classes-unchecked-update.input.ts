import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUncheckedUpdateManyWithoutDamageClassNestedInput } from '../moves/moves-unchecked-update-many-without-damage-class-nested.input';
import { TypesUncheckedUpdateManyWithoutDamageClassNestedInput } from '../types/types-unchecked-update-many-without-damage-class-nested.input';

@InputType()
export class MoveDamageClassesUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => MovesUncheckedUpdateManyWithoutDamageClassNestedInput, {nullable:true})
    moves?: Identity<MovesUncheckedUpdateManyWithoutDamageClassNestedInput>;

    @Field(() => TypesUncheckedUpdateManyWithoutDamageClassNestedInput, {nullable:true})
    types?: Identity<TypesUncheckedUpdateManyWithoutDamageClassNestedInput>;
}
