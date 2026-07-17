import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUncheckedUpdateManyWithoutEvolutionChainNestedInput } from '../pokemon-species/pokemon-species-unchecked-update-many-without-evolution-chain-nested.input';

@InputType()
export class EvolutionChainsUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    baby_trigger_item_id?: number;

    @Field(() => PokemonSpeciesUncheckedUpdateManyWithoutEvolutionChainNestedInput, {nullable:true})
    species?: Identity<PokemonSpeciesUncheckedUpdateManyWithoutEvolutionChainNestedInput>;
}
