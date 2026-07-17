import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsCreateNestedOneWithoutItemGameIndicesInput } from '../generations/generations-create-nested-one-without-item-game-indices.input';

@InputType()
export class ItemGameIndicesCreateWithoutItemInput {

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => GenerationsCreateNestedOneWithoutItemGameIndicesInput, {nullable:false})
    generation!: Identity<GenerationsCreateNestedOneWithoutItemGameIndicesInput>;
}
