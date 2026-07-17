import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesCreateNestedManyWithoutDamageClassInput } from '../moves/moves-create-nested-many-without-damage-class.input';
import { TypesCreateNestedManyWithoutDamageClassInput } from '../types/types-create-nested-many-without-damage-class.input';

@InputType()
export class MoveDamageClassesCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => MovesCreateNestedManyWithoutDamageClassInput, {nullable:true})
    moves?: Identity<MovesCreateNestedManyWithoutDamageClassInput>;

    @Field(() => TypesCreateNestedManyWithoutDamageClassInput, {nullable:true})
    types?: Identity<TypesCreateNestedManyWithoutDamageClassInput>;
}
