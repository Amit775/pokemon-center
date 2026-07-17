import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ItemsCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    identifier?: true;

    @Field(() => Boolean, {nullable:true})
    category_id?: true;

    @Field(() => Boolean, {nullable:true})
    cost?: true;

    @Field(() => Boolean, {nullable:true})
    fling_power?: true;

    @Field(() => Boolean, {nullable:true})
    fling_effect_id?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
