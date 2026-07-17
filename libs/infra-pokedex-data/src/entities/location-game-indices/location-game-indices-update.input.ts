import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationsUpdateOneRequiredWithoutGameIndicesNestedInput } from '../locations/locations-update-one-required-without-game-indices-nested.input';
import { GenerationsUpdateOneRequiredWithoutLocationGameIndicesNestedInput } from '../generations/generations-update-one-required-without-location-game-indices-nested.input';

@InputType()
export class LocationGameIndicesUpdateInput {

    @Field(() => Int, {nullable:true})
    game_index?: number;

    @Field(() => LocationsUpdateOneRequiredWithoutGameIndicesNestedInput, {nullable:true})
    location?: Identity<LocationsUpdateOneRequiredWithoutGameIndicesNestedInput>;

    @Field(() => GenerationsUpdateOneRequiredWithoutLocationGameIndicesNestedInput, {nullable:true})
    generation?: Identity<GenerationsUpdateOneRequiredWithoutLocationGameIndicesNestedInput>;
}
