import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonSpecies } from '../pokemon-species/pokemon-species.model';
import type { Identity } from 'identity-type';
import { PokemonForms } from '../pokemon-forms/pokemon-forms.model';
import { PokemonAbilities } from '../pokemon-abilities/pokemon-abilities.model';
import { PokemonMoves } from '../pokemon-moves/pokemon-moves.model';
import { PokemonStats } from '../pokemon-stats/pokemon-stats.model';
import { PokemonTypes } from '../pokemon-types/pokemon-types.model';
import { PokemonItems } from '../pokemon-items/pokemon-items.model';
import { PokemonGameIndices } from '../pokemon-game-indices/pokemon-game-indices.model';
import { Encounters } from '../encounters/encounters.model';
import { PokemonCount } from './pokemon-count.output';

@ObjectType()
export class Pokemon {

    @Field(() => ID, {nullable:false})
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
    order!: number | null;

    @Field(() => Int, {nullable:false})
    is_default!: number;

    @Field(() => PokemonSpecies, {nullable:false})
    species?: Identity<PokemonSpecies>;

    @Field(() => [PokemonForms], {nullable:false})
    forms?: Array<PokemonForms>;

    @Field(() => [PokemonAbilities], {nullable:false})
    abilities?: Array<PokemonAbilities>;

    @Field(() => [PokemonMoves], {nullable:false})
    moves?: Array<PokemonMoves>;

    @Field(() => [PokemonStats], {nullable:false})
    stats?: Array<PokemonStats>;

    @Field(() => [PokemonTypes], {nullable:false})
    types?: Array<PokemonTypes>;

    @Field(() => [PokemonItems], {nullable:false})
    items?: Array<PokemonItems>;

    @Field(() => [PokemonGameIndices], {nullable:false})
    gameIndices?: Array<PokemonGameIndices>;

    @Field(() => [Encounters], {nullable:false})
    encounters?: Array<Encounters>;

    @Field(() => PokemonCount, {nullable:false})
    _count?: Identity<PokemonCount>;
}
