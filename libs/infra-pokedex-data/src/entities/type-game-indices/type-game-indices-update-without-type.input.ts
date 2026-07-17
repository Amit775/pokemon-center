import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsUpdateOneRequiredWithoutTypeGameIndicesNestedInput } from '../generations/generations-update-one-required-without-type-game-indices-nested.input';

@InputType()
export class TypeGameIndicesUpdateWithoutTypeInput {

    @Field(() => Int, {nullable:true})
    game_index?: number;

    @Field(() => GenerationsUpdateOneRequiredWithoutTypeGameIndicesNestedInput, {nullable:true})
    generation?: Identity<GenerationsUpdateOneRequiredWithoutTypeGameIndicesNestedInput>;
}
