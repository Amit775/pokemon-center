import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonColorsWhereInput } from './pokemon-colors-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PokemonSpeciesListRelationFilter } from '../pokemon-species/pokemon-species-list-relation-filter.input';

@InputType()
export class PokemonColorsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [PokemonColorsWhereInput], {nullable:true})
    AND?: Array<PokemonColorsWhereInput>;

    @Field(() => [PokemonColorsWhereInput], {nullable:true})
    OR?: Array<PokemonColorsWhereInput>;

    @Field(() => [PokemonColorsWhereInput], {nullable:true})
    NOT?: Array<PokemonColorsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => PokemonSpeciesListRelationFilter, {nullable:true})
    species?: PokemonSpeciesListRelationFilter;
}
