import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TypesCreateNestedOneWithoutFormTypesInput } from '../types/types-create-nested-one-without-form-types.input';

@InputType()
export class PokemonFormTypesCreateWithoutPokemonFormInput {

    @Field(() => Int, {nullable:false})
    slot!: number;

    @Field(() => TypesCreateNestedOneWithoutFormTypesInput, {nullable:false})
    type!: TypesCreateNestedOneWithoutFormTypesInput;
}
