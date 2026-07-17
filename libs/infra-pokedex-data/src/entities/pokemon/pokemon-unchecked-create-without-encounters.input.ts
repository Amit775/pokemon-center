import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonFormsUncheckedCreateNestedManyWithoutPokemonInput } from '../pokemon-forms/pokemon-forms-unchecked-create-nested-many-without-pokemon.input';
import { PokemonAbilitiesUncheckedCreateNestedManyWithoutPokemonInput } from '../pokemon-abilities/pokemon-abilities-unchecked-create-nested-many-without-pokemon.input';
import { PokemonMovesUncheckedCreateNestedManyWithoutPokemonInput } from '../pokemon-moves/pokemon-moves-unchecked-create-nested-many-without-pokemon.input';
import { PokemonStatsUncheckedCreateNestedManyWithoutPokemonInput } from '../pokemon-stats/pokemon-stats-unchecked-create-nested-many-without-pokemon.input';
import { PokemonTypesUncheckedCreateNestedManyWithoutPokemonInput } from '../pokemon-types/pokemon-types-unchecked-create-nested-many-without-pokemon.input';
import { PokemonItemsUncheckedCreateNestedManyWithoutPokemonInput } from '../pokemon-items/pokemon-items-unchecked-create-nested-many-without-pokemon.input';
import { PokemonGameIndicesUncheckedCreateNestedManyWithoutPokemonInput } from '../pokemon-game-indices/pokemon-game-indices-unchecked-create-nested-many-without-pokemon.input';

@InputType()
export class PokemonUncheckedCreateWithoutEncountersInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    species_id!: number;

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

    @Field(() => PokemonFormsUncheckedCreateNestedManyWithoutPokemonInput, {nullable:true})
    forms?: PokemonFormsUncheckedCreateNestedManyWithoutPokemonInput;

    @Field(() => PokemonAbilitiesUncheckedCreateNestedManyWithoutPokemonInput, {nullable:true})
    abilities?: PokemonAbilitiesUncheckedCreateNestedManyWithoutPokemonInput;

    @Field(() => PokemonMovesUncheckedCreateNestedManyWithoutPokemonInput, {nullable:true})
    moves?: PokemonMovesUncheckedCreateNestedManyWithoutPokemonInput;

    @Field(() => PokemonStatsUncheckedCreateNestedManyWithoutPokemonInput, {nullable:true})
    stats?: PokemonStatsUncheckedCreateNestedManyWithoutPokemonInput;

    @Field(() => PokemonTypesUncheckedCreateNestedManyWithoutPokemonInput, {nullable:true})
    types?: PokemonTypesUncheckedCreateNestedManyWithoutPokemonInput;

    @Field(() => PokemonItemsUncheckedCreateNestedManyWithoutPokemonInput, {nullable:true})
    items?: PokemonItemsUncheckedCreateNestedManyWithoutPokemonInput;

    @Field(() => PokemonGameIndicesUncheckedCreateNestedManyWithoutPokemonInput, {nullable:true})
    gameIndices?: PokemonGameIndicesUncheckedCreateNestedManyWithoutPokemonInput;
}
