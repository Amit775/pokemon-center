import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TypesUncheckedCreateNestedManyWithoutDamageClassInput } from '../types/types-unchecked-create-nested-many-without-damage-class.input';

@InputType()
export class MoveDamageClassesUncheckedCreateWithoutMovesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => TypesUncheckedCreateNestedManyWithoutDamageClassInput, {nullable:true})
    types?: TypesUncheckedCreateNestedManyWithoutDamageClassInput;
}
