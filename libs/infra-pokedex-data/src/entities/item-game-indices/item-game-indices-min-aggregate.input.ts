import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ItemGameIndicesMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    item_id?: true;

    @Field(() => Boolean, {nullable:true})
    generation_id?: true;

    @Field(() => Boolean, {nullable:true})
    game_index?: true;
}
