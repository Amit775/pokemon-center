import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsCreateNestedOneWithoutBabyTriggerItemsInput } from '../items/items-create-nested-one-without-baby-trigger-items.input';

@InputType()
export class EvolutionChainsCreateWithoutSpeciesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => ItemsCreateNestedOneWithoutBabyTriggerItemsInput, {nullable:true})
    babyTriggerItem?: Identity<ItemsCreateNestedOneWithoutBabyTriggerItemsInput>;
}
