import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUncheckedCreateNestedManyWithoutEvolutionChainInput } from '../pokemon-species/pokemon-species-unchecked-create-nested-many-without-evolution-chain.input';

@InputType()
export class EvolutionChainsUncheckedCreateWithoutBabyTriggerItemInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => PokemonSpeciesUncheckedCreateNestedManyWithoutEvolutionChainInput, {nullable:true})
    species?: Identity<PokemonSpeciesUncheckedCreateNestedManyWithoutEvolutionChainInput>;
}
