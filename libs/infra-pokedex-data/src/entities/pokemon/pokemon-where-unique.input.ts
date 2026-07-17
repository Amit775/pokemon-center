import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonWhereInput } from './pokemon-where.input';
import type { Identity } from 'identity-type';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { PokemonSpeciesScalarRelationFilter } from '../pokemon-species/pokemon-species-scalar-relation-filter.input';
import { PokemonFormsListRelationFilter } from '../pokemon-forms/pokemon-forms-list-relation-filter.input';
import { PokemonAbilitiesListRelationFilter } from '../pokemon-abilities/pokemon-abilities-list-relation-filter.input';
import { PokemonMovesListRelationFilter } from '../pokemon-moves/pokemon-moves-list-relation-filter.input';
import { PokemonStatsListRelationFilter } from '../pokemon-stats/pokemon-stats-list-relation-filter.input';
import { PokemonTypesListRelationFilter } from '../pokemon-types/pokemon-types-list-relation-filter.input';
import { PokemonItemsListRelationFilter } from '../pokemon-items/pokemon-items-list-relation-filter.input';
import { PokemonGameIndicesListRelationFilter } from '../pokemon-game-indices/pokemon-game-indices-list-relation-filter.input';
import { EncountersListRelationFilter } from '../encounters/encounters-list-relation-filter.input';

@InputType()
export class PokemonWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [PokemonWhereInput], {nullable:true})
    AND?: Array<PokemonWhereInput>;

    @Field(() => [PokemonWhereInput], {nullable:true})
    OR?: Array<PokemonWhereInput>;

    @Field(() => [PokemonWhereInput], {nullable:true})
    NOT?: Array<PokemonWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => IntFilter, {nullable:true})
    species_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    height?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    weight?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    base_experience?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    order?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    is_default?: Identity<IntFilter>;

    @Field(() => PokemonSpeciesScalarRelationFilter, {nullable:true})
    species?: Identity<PokemonSpeciesScalarRelationFilter>;

    @Field(() => PokemonFormsListRelationFilter, {nullable:true})
    forms?: Identity<PokemonFormsListRelationFilter>;

    @Field(() => PokemonAbilitiesListRelationFilter, {nullable:true})
    abilities?: Identity<PokemonAbilitiesListRelationFilter>;

    @Field(() => PokemonMovesListRelationFilter, {nullable:true})
    moves?: Identity<PokemonMovesListRelationFilter>;

    @Field(() => PokemonStatsListRelationFilter, {nullable:true})
    stats?: Identity<PokemonStatsListRelationFilter>;

    @Field(() => PokemonTypesListRelationFilter, {nullable:true})
    types?: Identity<PokemonTypesListRelationFilter>;

    @Field(() => PokemonItemsListRelationFilter, {nullable:true})
    items?: Identity<PokemonItemsListRelationFilter>;

    @Field(() => PokemonGameIndicesListRelationFilter, {nullable:true})
    gameIndices?: Identity<PokemonGameIndicesListRelationFilter>;

    @Field(() => EncountersListRelationFilter, {nullable:true})
    encounters?: Identity<EncountersListRelationFilter>;
}
