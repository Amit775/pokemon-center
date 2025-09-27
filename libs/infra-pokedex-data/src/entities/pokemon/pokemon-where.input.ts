import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
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
export class PokemonWhereInput {

    @Field(() => [PokemonWhereInput], {nullable:true})
    AND?: Array<PokemonWhereInput>;

    @Field(() => [PokemonWhereInput], {nullable:true})
    OR?: Array<PokemonWhereInput>;

    @Field(() => [PokemonWhereInput], {nullable:true})
    NOT?: Array<PokemonWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    species_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    height?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    weight?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    base_experience?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    order?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    is_default?: IntFilter;

    @Field(() => PokemonSpeciesScalarRelationFilter, {nullable:true})
    species?: PokemonSpeciesScalarRelationFilter;

    @Field(() => PokemonFormsListRelationFilter, {nullable:true})
    forms?: PokemonFormsListRelationFilter;

    @Field(() => PokemonAbilitiesListRelationFilter, {nullable:true})
    abilities?: PokemonAbilitiesListRelationFilter;

    @Field(() => PokemonMovesListRelationFilter, {nullable:true})
    moves?: PokemonMovesListRelationFilter;

    @Field(() => PokemonStatsListRelationFilter, {nullable:true})
    stats?: PokemonStatsListRelationFilter;

    @Field(() => PokemonTypesListRelationFilter, {nullable:true})
    types?: PokemonTypesListRelationFilter;

    @Field(() => PokemonItemsListRelationFilter, {nullable:true})
    items?: PokemonItemsListRelationFilter;

    @Field(() => PokemonGameIndicesListRelationFilter, {nullable:true})
    gameIndices?: PokemonGameIndicesListRelationFilter;

    @Field(() => EncountersListRelationFilter, {nullable:true})
    encounters?: EncountersListRelationFilter;
}
