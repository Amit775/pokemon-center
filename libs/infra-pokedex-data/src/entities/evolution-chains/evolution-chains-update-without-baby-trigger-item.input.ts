import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput } from '../pokemon-species/pokemon-species-update-many-without-evolution-chain-nested.input';

@InputType()
export class EvolutionChainsUpdateWithoutBabyTriggerItemInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput, {nullable:true})
    species?: Identity<PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput>;
}
