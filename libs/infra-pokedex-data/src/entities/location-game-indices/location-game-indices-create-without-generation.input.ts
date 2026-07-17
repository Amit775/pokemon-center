import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LocationsCreateNestedOneWithoutGameIndicesInput } from '../locations/locations-create-nested-one-without-game-indices.input';

@InputType()
export class LocationGameIndicesCreateWithoutGenerationInput {

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => LocationsCreateNestedOneWithoutGameIndicesInput, {nullable:false})
    location!: LocationsCreateNestedOneWithoutGameIndicesInput;
}
