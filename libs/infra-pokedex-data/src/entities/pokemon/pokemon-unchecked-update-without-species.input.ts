import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormsUncheckedUpdateManyWithoutPokemonNestedInput } from '../pokemon-forms/pokemon-forms-unchecked-update-many-without-pokemon-nested.input';
import { PokemonAbilitiesUncheckedUpdateManyWithoutPokemonNestedInput } from '../pokemon-abilities/pokemon-abilities-unchecked-update-many-without-pokemon-nested.input';
import { PokemonMovesUncheckedUpdateManyWithoutPokemonNestedInput } from '../pokemon-moves/pokemon-moves-unchecked-update-many-without-pokemon-nested.input';
import { PokemonStatsUncheckedUpdateManyWithoutPokemonNestedInput } from '../pokemon-stats/pokemon-stats-unchecked-update-many-without-pokemon-nested.input';
import { PokemonTypesUncheckedUpdateManyWithoutPokemonNestedInput } from '../pokemon-types/pokemon-types-unchecked-update-many-without-pokemon-nested.input';
import { PokemonItemsUncheckedUpdateManyWithoutPokemonNestedInput } from '../pokemon-items/pokemon-items-unchecked-update-many-without-pokemon-nested.input';
import { PokemonGameIndicesUncheckedUpdateManyWithoutPokemonNestedInput } from '../pokemon-game-indices/pokemon-game-indices-unchecked-update-many-without-pokemon-nested.input';
import { EncountersUncheckedUpdateManyWithoutPokemonNestedInput } from '../encounters/encounters-unchecked-update-many-without-pokemon-nested.input';

@InputType()
export class PokemonUncheckedUpdateWithoutSpeciesInput {

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

    @Field(() => PokemonFormsUncheckedUpdateManyWithoutPokemonNestedInput, {nullable:true})
    forms?: Identity<PokemonFormsUncheckedUpdateManyWithoutPokemonNestedInput>;

    @Field(() => PokemonAbilitiesUncheckedUpdateManyWithoutPokemonNestedInput, {nullable:true})
    abilities?: Identity<PokemonAbilitiesUncheckedUpdateManyWithoutPokemonNestedInput>;

    @Field(() => PokemonMovesUncheckedUpdateManyWithoutPokemonNestedInput, {nullable:true})
    moves?: Identity<PokemonMovesUncheckedUpdateManyWithoutPokemonNestedInput>;

    @Field(() => PokemonStatsUncheckedUpdateManyWithoutPokemonNestedInput, {nullable:true})
    stats?: Identity<PokemonStatsUncheckedUpdateManyWithoutPokemonNestedInput>;

    @Field(() => PokemonTypesUncheckedUpdateManyWithoutPokemonNestedInput, {nullable:true})
    types?: Identity<PokemonTypesUncheckedUpdateManyWithoutPokemonNestedInput>;

    @Field(() => PokemonItemsUncheckedUpdateManyWithoutPokemonNestedInput, {nullable:true})
    items?: Identity<PokemonItemsUncheckedUpdateManyWithoutPokemonNestedInput>;

    @Field(() => PokemonGameIndicesUncheckedUpdateManyWithoutPokemonNestedInput, {nullable:true})
    gameIndices?: Identity<PokemonGameIndicesUncheckedUpdateManyWithoutPokemonNestedInput>;

    @Field(() => EncountersUncheckedUpdateManyWithoutPokemonNestedInput, {nullable:true})
    encounters?: Identity<EncountersUncheckedUpdateManyWithoutPokemonNestedInput>;
}
