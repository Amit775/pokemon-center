import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BerriesAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    item_id?: true;

    @Field(() => Boolean, {nullable:true})
    firmness_id?: true;

    @Field(() => Boolean, {nullable:true})
    natural_gift_power?: true;

    @Field(() => Boolean, {nullable:true})
    natural_gift_type_id?: true;

    @Field(() => Boolean, {nullable:true})
    size?: true;

    @Field(() => Boolean, {nullable:true})
    max_harvest?: true;

    @Field(() => Boolean, {nullable:true})
    growth_time?: true;

    @Field(() => Boolean, {nullable:true})
    soil_dryness?: true;

    @Field(() => Boolean, {nullable:true})
    smoothness?: true;
}
