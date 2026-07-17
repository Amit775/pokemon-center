import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsUpdateOneRequiredWithoutLocationGameIndicesNestedInput } from '../generations/generations-update-one-required-without-location-game-indices-nested.input';

@InputType()
export class LocationGameIndicesUpdateWithoutLocationInput {

    @Field(() => Int, {nullable:true})
    game_index?: number;

    @Field(() => GenerationsUpdateOneRequiredWithoutLocationGameIndicesNestedInput, {nullable:true})
    generation?: Identity<GenerationsUpdateOneRequiredWithoutLocationGameIndicesNestedInput>;
}
