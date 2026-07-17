import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateNestedOneWithoutPokemonInput } from '../pokemon-species/pokemon-species-create-nested-one-without-pokemon.input';
import { PokemonFormsCreateNestedManyWithoutPokemonInput } from '../pokemon-forms/pokemon-forms-create-nested-many-without-pokemon.input';
import { PokemonAbilitiesCreateNestedManyWithoutPokemonInput } from '../pokemon-abilities/pokemon-abilities-create-nested-many-without-pokemon.input';
import { PokemonStatsCreateNestedManyWithoutPokemonInput } from '../pokemon-stats/pokemon-stats-create-nested-many-without-pokemon.input';
import { PokemonTypesCreateNestedManyWithoutPokemonInput } from '../pokemon-types/pokemon-types-create-nested-many-without-pokemon.input';
import { PokemonItemsCreateNestedManyWithoutPokemonInput } from '../pokemon-items/pokemon-items-create-nested-many-without-pokemon.input';
import { PokemonGameIndicesCreateNestedManyWithoutPokemonInput } from '../pokemon-game-indices/pokemon-game-indices-create-nested-many-without-pokemon.input';
import { EncountersCreateNestedManyWithoutPokemonInput } from '../encounters/encounters-create-nested-many-without-pokemon.input';

@InputType()
export class PokemonCreateWithoutMovesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    height!: number;

    @Field(() => Int, {nullable:false})
    weight!: number;

    @Field(() => Int, {nullable:false})
    base_experience!: number;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Int, {nullable:false})
    is_default!: number;

    @Field(() => PokemonSpeciesCreateNestedOneWithoutPokemonInput, {nullable:false})
    species!: Identity<PokemonSpeciesCreateNestedOneWithoutPokemonInput>;

    @Field(() => PokemonFormsCreateNestedManyWithoutPokemonInput, {nullable:true})
    forms?: Identity<PokemonFormsCreateNestedManyWithoutPokemonInput>;

    @Field(() => PokemonAbilitiesCreateNestedManyWithoutPokemonInput, {nullable:true})
    abilities?: Identity<PokemonAbilitiesCreateNestedManyWithoutPokemonInput>;

    @Field(() => PokemonStatsCreateNestedManyWithoutPokemonInput, {nullable:true})
    stats?: Identity<PokemonStatsCreateNestedManyWithoutPokemonInput>;

    @Field(() => PokemonTypesCreateNestedManyWithoutPokemonInput, {nullable:true})
    types?: Identity<PokemonTypesCreateNestedManyWithoutPokemonInput>;

    @Field(() => PokemonItemsCreateNestedManyWithoutPokemonInput, {nullable:true})
    items?: Identity<PokemonItemsCreateNestedManyWithoutPokemonInput>;

    @Field(() => PokemonGameIndicesCreateNestedManyWithoutPokemonInput, {nullable:true})
    gameIndices?: Identity<PokemonGameIndicesCreateNestedManyWithoutPokemonInput>;

    @Field(() => EncountersCreateNestedManyWithoutPokemonInput, {nullable:true})
    encounters?: Identity<EncountersCreateNestedManyWithoutPokemonInput>;
}
