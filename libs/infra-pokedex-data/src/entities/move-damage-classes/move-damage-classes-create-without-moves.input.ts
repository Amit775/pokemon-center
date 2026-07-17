import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TypesCreateNestedManyWithoutDamageClassInput } from '../types/types-create-nested-many-without-damage-class.input';

@InputType()
export class MoveDamageClassesCreateWithoutMovesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => TypesCreateNestedManyWithoutDamageClassInput, {nullable:true})
    types?: TypesCreateNestedManyWithoutDamageClassInput;
}
