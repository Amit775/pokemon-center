import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LocationsCreateNestedOneWithoutGameIndicesInput } from '../locations/locations-create-nested-one-without-game-indices.input';
import { GenerationsCreateNestedOneWithoutLocationGameIndicesInput } from '../generations/generations-create-nested-one-without-location-game-indices.input';

@InputType()
export class LocationGameIndicesCreateInput {

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => LocationsCreateNestedOneWithoutGameIndicesInput, {nullable:false})
    location!: LocationsCreateNestedOneWithoutGameIndicesInput;

    @Field(() => GenerationsCreateNestedOneWithoutLocationGameIndicesInput, {nullable:false})
    generation!: GenerationsCreateNestedOneWithoutLocationGameIndicesInput;
}
