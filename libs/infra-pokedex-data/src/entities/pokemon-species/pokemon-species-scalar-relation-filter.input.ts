import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';

@InputType()
export class PokemonSpeciesScalarRelationFilter {

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    is?: Identity<PokemonSpeciesWhereInput>;

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    isNot?: Identity<PokemonSpeciesWhereInput>;
}
