import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';

@InputType()
export class PokemonSpeciesListRelationFilter {

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    every?: PokemonSpeciesWhereInput;

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    some?: PokemonSpeciesWhereInput;

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    none?: PokemonSpeciesWhereInput;
}
