import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ItemsMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    category_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    cost?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    fling_power?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    fling_effect_id?: `${SortOrder}`;
}
