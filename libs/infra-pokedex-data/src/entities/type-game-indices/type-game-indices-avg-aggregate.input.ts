import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TypeGameIndicesAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    type_id?: true;

    @Field(() => Boolean, {nullable:true})
    generation_id?: true;

    @Field(() => Boolean, {nullable:true})
    game_index?: true;
}
