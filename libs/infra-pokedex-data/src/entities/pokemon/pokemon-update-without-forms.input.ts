import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput } from '../pokemon-species/pokemon-species-update-one-required-without-pokemon-nested.input';
import { PokemonAbilitiesUpdateManyWithoutPokemonNestedInput } from '../pokemon-abilities/pokemon-abilities-update-many-without-pokemon-nested.input';
import { PokemonMovesUpdateManyWithoutPokemonNestedInput } from '../pokemon-moves/pokemon-moves-update-many-without-pokemon-nested.input';
import { PokemonStatsUpdateManyWithoutPokemonNestedInput } from '../pokemon-stats/pokemon-stats-update-many-without-pokemon-nested.input';
import { PokemonTypesUpdateManyWithoutPokemonNestedInput } from '../pokemon-types/pokemon-types-update-many-without-pokemon-nested.input';
import { PokemonItemsUpdateManyWithoutPokemonNestedInput } from '../pokemon-items/pokemon-items-update-many-without-pokemon-nested.input';
import { PokemonGameIndicesUpdateManyWithoutPokemonNestedInput } from '../pokemon-game-indices/pokemon-game-indices-update-many-without-pokemon-nested.input';
import { EncountersUpdateManyWithoutPokemonNestedInput } from '../encounters/encounters-update-many-without-pokemon-nested.input';

@InputType()
export class PokemonUpdateWithoutFormsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    height?: number;

    @Field(() => Int, {nullable:true})
    weight?: number;

    @Field(() => Int, {nullable:true})
    base_experience?: number;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Int, {nullable:true})
    is_default?: number;

    @Field(() => PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput, {nullable:true})
    species?: Identity<PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput>;

    @Field(() => PokemonAbilitiesUpdateManyWithoutPokemonNestedInput, {nullable:true})
    abilities?: Identity<PokemonAbilitiesUpdateManyWithoutPokemonNestedInput>;

    @Field(() => PokemonMovesUpdateManyWithoutPokemonNestedInput, {nullable:true})
    moves?: Identity<PokemonMovesUpdateManyWithoutPokemonNestedInput>;

    @Field(() => PokemonStatsUpdateManyWithoutPokemonNestedInput, {nullable:true})
    stats?: Identity<PokemonStatsUpdateManyWithoutPokemonNestedInput>;

    @Field(() => PokemonTypesUpdateManyWithoutPokemonNestedInput, {nullable:true})
    types?: Identity<PokemonTypesUpdateManyWithoutPokemonNestedInput>;

    @Field(() => PokemonItemsUpdateManyWithoutPokemonNestedInput, {nullable:true})
    items?: Identity<PokemonItemsUpdateManyWithoutPokemonNestedInput>;

    @Field(() => PokemonGameIndicesUpdateManyWithoutPokemonNestedInput, {nullable:true})
    gameIndices?: Identity<PokemonGameIndicesUpdateManyWithoutPokemonNestedInput>;

    @Field(() => EncountersUpdateManyWithoutPokemonNestedInput, {nullable:true})
    encounters?: Identity<EncountersUpdateManyWithoutPokemonNestedInput>;
}
