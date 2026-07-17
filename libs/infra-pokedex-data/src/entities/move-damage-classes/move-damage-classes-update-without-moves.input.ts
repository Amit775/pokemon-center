import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesUpdateManyWithoutDamageClassNestedInput } from '../types/types-update-many-without-damage-class-nested.input';

@InputType()
export class MoveDamageClassesUpdateWithoutMovesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => TypesUpdateManyWithoutDamageClassNestedInput, {nullable:true})
    types?: Identity<TypesUpdateManyWithoutDamageClassNestedInput>;
}
