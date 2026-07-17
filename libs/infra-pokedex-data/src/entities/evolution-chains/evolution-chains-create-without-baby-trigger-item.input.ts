import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateNestedManyWithoutEvolutionChainInput } from '../pokemon-species/pokemon-species-create-nested-many-without-evolution-chain.input';

@InputType()
export class EvolutionChainsCreateWithoutBabyTriggerItemInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => PokemonSpeciesCreateNestedManyWithoutEvolutionChainInput, {nullable:true})
    species?: Identity<PokemonSpeciesCreateNestedManyWithoutEvolutionChainInput>;
}
