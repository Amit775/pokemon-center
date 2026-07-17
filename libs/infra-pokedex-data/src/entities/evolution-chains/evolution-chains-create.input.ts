import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsCreateNestedOneWithoutBabyTriggerItemsInput } from '../items/items-create-nested-one-without-baby-trigger-items.input';
import { PokemonSpeciesCreateNestedManyWithoutEvolutionChainInput } from '../pokemon-species/pokemon-species-create-nested-many-without-evolution-chain.input';

@InputType()
export class EvolutionChainsCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => ItemsCreateNestedOneWithoutBabyTriggerItemsInput, {nullable:true})
    babyTriggerItem?: Identity<ItemsCreateNestedOneWithoutBabyTriggerItemsInput>;

    @Field(() => PokemonSpeciesCreateNestedManyWithoutEvolutionChainInput, {nullable:true})
    species?: Identity<PokemonSpeciesCreateNestedManyWithoutEvolutionChainInput>;
}
