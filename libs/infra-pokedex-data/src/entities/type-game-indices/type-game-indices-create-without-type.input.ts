import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GenerationsCreateNestedOneWithoutTypeGameIndicesInput } from '../generations/generations-create-nested-one-without-type-game-indices.input';

@InputType()
export class TypeGameIndicesCreateWithoutTypeInput {

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => GenerationsCreateNestedOneWithoutTypeGameIndicesInput, {nullable:false})
    generation!: GenerationsCreateNestedOneWithoutTypeGameIndicesInput;
}
