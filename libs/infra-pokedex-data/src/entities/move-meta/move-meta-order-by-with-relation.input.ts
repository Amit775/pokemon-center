import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MovesOrderByWithRelationInput } from '../moves/moves-order-by-with-relation.input';
import { MoveMetaCategoriesOrderByWithRelationInput } from '../move-meta-categories/move-meta-categories-order-by-with-relation.input';
import { MoveMetaAilmentsOrderByWithRelationInput } from '../move-meta-ailments/move-meta-ailments-order-by-with-relation.input';
import { MoveMetaStatChangesOrderByRelationAggregateInput } from '../move-meta-stat-changes/move-meta-stat-changes-order-by-relation-aggregate.input';

@InputType()
export class MoveMetaOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    move_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    meta_category_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    meta_ailment_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    min_hits?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    max_hits?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    min_turns?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    max_turns?: SortOrderInput;

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

    @Field(() => MovesOrderByWithRelationInput, {nullable:true})
    move?: MovesOrderByWithRelationInput;

    @Field(() => MoveMetaCategoriesOrderByWithRelationInput, {nullable:true})
    metaCategory?: MoveMetaCategoriesOrderByWithRelationInput;

    @Field(() => MoveMetaAilmentsOrderByWithRelationInput, {nullable:true})
    metaAilment?: MoveMetaAilmentsOrderByWithRelationInput;

    @Field(() => MoveMetaStatChangesOrderByRelationAggregateInput, {nullable:true})
    statChanges?: MoveMetaStatChangesOrderByRelationAggregateInput;
}
