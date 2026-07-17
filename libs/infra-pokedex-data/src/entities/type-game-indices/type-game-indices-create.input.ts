import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesCreateNestedOneWithoutGameIndicesInput } from '../types/types-create-nested-one-without-game-indices.input';
import { GenerationsCreateNestedOneWithoutTypeGameIndicesInput } from '../generations/generations-create-nested-one-without-type-game-indices.input';

@InputType()
export class TypeGameIndicesCreateInput {

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => TypesCreateNestedOneWithoutGameIndicesInput, {nullable:false})
    type!: Identity<TypesCreateNestedOneWithoutGameIndicesInput>;

    @Field(() => GenerationsCreateNestedOneWithoutTypeGameIndicesInput, {nullable:false})
    generation!: Identity<GenerationsCreateNestedOneWithoutTypeGameIndicesInput>;
}
