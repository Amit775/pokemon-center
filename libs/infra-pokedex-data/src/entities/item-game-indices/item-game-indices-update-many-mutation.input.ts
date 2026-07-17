import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ItemGameIndicesUpdateManyMutationInput {

    @Field(() => Int, {nullable:true})
    game_index?: number;
}
