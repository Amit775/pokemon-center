import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsUpdateOneWithoutBabyTriggerItemsNestedInput } from '../items/items-update-one-without-baby-trigger-items-nested.input';

@InputType()
export class EvolutionChainsUpdateWithoutSpeciesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => ItemsUpdateOneWithoutBabyTriggerItemsNestedInput, {nullable:true})
    babyTriggerItem?: Identity<ItemsUpdateOneWithoutBabyTriggerItemsNestedInput>;
}
