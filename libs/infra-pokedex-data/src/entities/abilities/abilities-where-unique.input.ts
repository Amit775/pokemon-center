import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AbilitiesWhereInput } from './abilities-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { GenerationsScalarRelationFilter } from '../generations/generations-scalar-relation-filter.input';
import { PokemonAbilitiesListRelationFilter } from '../pokemon-abilities/pokemon-abilities-list-relation-filter.input';

@InputType()
export class AbilitiesWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [AbilitiesWhereInput], {nullable:true})
    AND?: Array<AbilitiesWhereInput>;

    @Field(() => [AbilitiesWhereInput], {nullable:true})
    OR?: Array<AbilitiesWhereInput>;

    @Field(() => [AbilitiesWhereInput], {nullable:true})
    NOT?: Array<AbilitiesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    is_main_series?: IntFilter;

    @Field(() => GenerationsScalarRelationFilter, {nullable:true})
    generation?: GenerationsScalarRelationFilter;

    @Field(() => PokemonAbilitiesListRelationFilter, {nullable:true})
    pokemonAbilities?: PokemonAbilitiesListRelationFilter;
}
