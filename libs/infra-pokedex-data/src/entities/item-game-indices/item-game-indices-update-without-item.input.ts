import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsUpdateOneRequiredWithoutItemGameIndicesNestedInput } from '../generations/generations-update-one-required-without-item-game-indices-nested.input';

@InputType()
export class ItemGameIndicesUpdateWithoutItemInput {

    @Field(() => Int, {nullable:true})
    game_index?: number;

    @Field(() => GenerationsUpdateOneRequiredWithoutItemGameIndicesNestedInput, {nullable:true})
    generation?: Identity<GenerationsUpdateOneRequiredWithoutItemGameIndicesNestedInput>;
}
