import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MoveMetaSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    move_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    meta_category_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    meta_ailment_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    min_hits?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    max_hits?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    min_turns?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    max_turns?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    drain?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    healing?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    crit_rate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    ailment_chance?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    flinch_chance?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    stat_chance?: `${SortOrder}`;
}
