import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Generations } from '../generations/generations.model';
import type { Identity } from 'identity-type';
import { MoveDamageClasses } from '../move-damage-classes/move-damage-classes.model';
import { Moves } from '../moves/moves.model';
import { PokemonTypes } from '../pokemon-types/pokemon-types.model';
import { PokemonFormTypes } from '../pokemon-form-types/pokemon-form-types.model';
import { TypeGameIndices } from '../type-game-indices/type-game-indices.model';
import { TypeEfficacy } from '../type-efficacy/type-efficacy.model';
import { BerryFlavors } from '../berry-flavors/berry-flavors.model';
import { PokemonEvolution } from '../pokemon-evolution/pokemon-evolution.model';
import { Berries } from '../berries/berries.model';
import { TypesCount } from './types-count.output';

/**
 * @@TypeGraphQL.type(name: "Type")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "Type")'})
export class Types {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:true})
    damage_class_id!: number | null;

    @Field(() => Generations, {nullable:false})
    generation?: Identity<Generations>;

    @Field(() => MoveDamageClasses, {nullable:true})
    damageClass?: Identity<MoveDamageClasses> | null;

    @Field(() => [Moves], {nullable:false})
    moves?: Array<Moves>;

    @Field(() => [PokemonTypes], {nullable:false})
    pokemonTypes?: Array<PokemonTypes>;

    @Field(() => [PokemonFormTypes], {nullable:false})
    formTypes?: Array<PokemonFormTypes>;

    @Field(() => [TypeGameIndices], {nullable:false})
    gameIndices?: Array<TypeGameIndices>;

    @Field(() => [TypeEfficacy], {nullable:false})
    efficacy?: Array<TypeEfficacy>;

    @Field(() => [TypeEfficacy], {nullable:false})
    efficacyTarget?: Array<TypeEfficacy>;

    @Field(() => [BerryFlavors], {nullable:false})
    berryFlavors?: Array<BerryFlavors>;

    @Field(() => [PokemonEvolution], {nullable:false})
    knownMoveTypes?: Array<PokemonEvolution>;

    @Field(() => [PokemonEvolution], {nullable:false})
    partyTypes?: Array<PokemonEvolution>;

    @Field(() => [Berries], {nullable:false})
    naturalGiftTypes?: Array<Berries>;

    @Field(() => TypesCount, {nullable:false})
    _count?: Identity<TypesCount>;
}
