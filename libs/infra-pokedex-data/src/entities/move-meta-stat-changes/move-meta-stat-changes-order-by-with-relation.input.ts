import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { StatsOrderByWithRelationInput } from '../stats/stats-order-by-with-relation.input';
import { MoveMetaOrderByWithRelationInput } from '../move-meta/move-meta-order-by-with-relation.input';

@InputType()
export class MoveMetaStatChangesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    move_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    stat_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    change?: `${SortOrder}`;

    @Field(() => StatsOrderByWithRelationInput, {nullable:true})
    stat?: Identity<StatsOrderByWithRelationInput>;

    @Field(() => MoveMetaOrderByWithRelationInput, {nullable:true})
    meta?: Identity<MoveMetaOrderByWithRelationInput>;
}
