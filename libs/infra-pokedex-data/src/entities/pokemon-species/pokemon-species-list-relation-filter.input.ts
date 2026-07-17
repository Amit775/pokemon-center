import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';

@InputType()
export class PokemonSpeciesListRelationFilter {

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    every?: Identity<PokemonSpeciesWhereInput>;

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    some?: Identity<PokemonSpeciesWhereInput>;

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    none?: Identity<PokemonSpeciesWhereInput>;
}
