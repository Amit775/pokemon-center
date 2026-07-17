import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class BerriesScalarWhereWithAggregatesInput {

    @Field(() => [BerriesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BerriesScalarWhereWithAggregatesInput>;

    @Field(() => [BerriesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BerriesScalarWhereWithAggregatesInput>;

    @Field(() => [BerriesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BerriesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    item_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    firmness_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    natural_gift_power?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    natural_gift_type_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    size?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    max_harvest?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    growth_time?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    soil_dryness?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    smoothness?: Identity<IntWithAggregatesFilter>;
}
