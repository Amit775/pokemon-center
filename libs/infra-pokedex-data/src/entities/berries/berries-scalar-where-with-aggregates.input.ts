import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class BerriesScalarWhereWithAggregatesInput {

    @Field(() => [BerriesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BerriesScalarWhereWithAggregatesInput>;

    @Field(() => [BerriesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BerriesScalarWhereWithAggregatesInput>;

    @Field(() => [BerriesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BerriesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    item_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    firmness_id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    natural_gift_power?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    natural_gift_type_id?: IntNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    size?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    max_harvest?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    growth_time?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    soil_dryness?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    smoothness?: IntWithAggregatesFilter;
}
