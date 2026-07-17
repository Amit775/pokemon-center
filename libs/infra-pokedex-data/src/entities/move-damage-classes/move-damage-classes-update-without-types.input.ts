import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUpdateManyWithoutDamageClassNestedInput } from '../moves/moves-update-many-without-damage-class-nested.input';

@InputType()
export class MoveDamageClassesUpdateWithoutTypesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => MovesUpdateManyWithoutDamageClassNestedInput, {nullable:true})
    moves?: Identity<MovesUpdateManyWithoutDamageClassNestedInput>;
}
