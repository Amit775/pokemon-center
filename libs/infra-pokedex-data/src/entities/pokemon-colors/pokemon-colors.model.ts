import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PokemonSpecies } from '../pokemon-species/pokemon-species.model';
import { PokemonColorsCount } from './pokemon-colors-count.output';
import type { Identity } from 'identity-type';

/**
 * @@TypeGraphQL.type(name: "PokemonColor")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "PokemonColor")'})
export class PokemonColors {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [PokemonSpecies], {nullable:false})
    species?: Array<PokemonSpecies>;

    @Field(() => PokemonColorsCount, {nullable:false})
    _count?: Identity<PokemonColorsCount>;
}
