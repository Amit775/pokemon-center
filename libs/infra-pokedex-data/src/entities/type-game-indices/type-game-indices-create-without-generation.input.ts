import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TypesCreateNestedOneWithoutGameIndicesInput } from '../types/types-create-nested-one-without-game-indices.input';

@InputType()
export class TypeGameIndicesCreateWithoutGenerationInput {

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => TypesCreateNestedOneWithoutGameIndicesInput, {nullable:false})
    type!: TypesCreateNestedOneWithoutGameIndicesInput;
}
