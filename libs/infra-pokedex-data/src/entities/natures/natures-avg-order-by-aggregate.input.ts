import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class NaturesAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    decreased_stat_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    increased_stat_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    hates_flavor_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    likes_flavor_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    game_index?: `${SortOrder}`;
}
