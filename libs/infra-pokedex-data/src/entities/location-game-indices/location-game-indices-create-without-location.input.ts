import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GenerationsCreateNestedOneWithoutLocationGameIndicesInput } from '../generations/generations-create-nested-one-without-location-game-indices.input';

@InputType()
export class LocationGameIndicesCreateWithoutLocationInput {

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => GenerationsCreateNestedOneWithoutLocationGameIndicesInput, {nullable:false})
    generation!: GenerationsCreateNestedOneWithoutLocationGameIndicesInput;
}
