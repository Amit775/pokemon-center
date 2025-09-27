import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BerriesAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    item_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    firmness_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    natural_gift_power?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    natural_gift_type_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    size?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    max_harvest?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    growth_time?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    soil_dryness?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    smoothness?: `${SortOrder}`;
}
