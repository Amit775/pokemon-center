import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormsWhereInput } from './pokemon-forms-where.input';

@InputType()
export class PokemonFormsListRelationFilter {

    @Field(() => PokemonFormsWhereInput, {nullable:true})
    every?: PokemonFormsWhereInput;

    @Field(() => PokemonFormsWhereInput, {nullable:true})
    some?: PokemonFormsWhereInput;

    @Field(() => PokemonFormsWhereInput, {nullable:true})
    none?: PokemonFormsWhereInput;
}
