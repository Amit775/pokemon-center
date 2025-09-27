import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonHabitatsWhereInput } from './pokemon-habitats-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PokemonSpeciesListRelationFilter } from '../pokemon-species/pokemon-species-list-relation-filter.input';

@InputType()
export class PokemonHabitatsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [PokemonHabitatsWhereInput], {nullable:true})
    AND?: Array<PokemonHabitatsWhereInput>;

    @Field(() => [PokemonHabitatsWhereInput], {nullable:true})
    OR?: Array<PokemonHabitatsWhereInput>;

    @Field(() => [PokemonHabitatsWhereInput], {nullable:true})
    NOT?: Array<PokemonHabitatsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => PokemonSpeciesListRelationFilter, {nullable:true})
    species?: PokemonSpeciesListRelationFilter;
}
