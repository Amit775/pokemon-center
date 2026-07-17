import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsUpdateOneWithoutBabyTriggerItemsNestedInput } from '../items/items-update-one-without-baby-trigger-items-nested.input';
import { PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput } from '../pokemon-species/pokemon-species-update-many-without-evolution-chain-nested.input';

@InputType()
export class EvolutionChainsUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => ItemsUpdateOneWithoutBabyTriggerItemsNestedInput, {nullable:true})
    babyTriggerItem?: Identity<ItemsUpdateOneWithoutBabyTriggerItemsNestedInput>;

    @Field(() => PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput, {nullable:true})
    species?: Identity<PokemonSpeciesUpdateManyWithoutEvolutionChainNestedInput>;
}
