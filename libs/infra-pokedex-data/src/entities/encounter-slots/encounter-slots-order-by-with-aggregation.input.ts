import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { SortOrderInput } from '../prisma/sort-order.input';
import { EncounterSlotsCountOrderByAggregateInput } from './encounter-slots-count-order-by-aggregate.input';
import { EncounterSlotsAvgOrderByAggregateInput } from './encounter-slots-avg-order-by-aggregate.input';
import { EncounterSlotsMaxOrderByAggregateInput } from './encounter-slots-max-order-by-aggregate.input';
import { EncounterSlotsMinOrderByAggregateInput } from './encounter-slots-min-order-by-aggregate.input';
import { EncounterSlotsSumOrderByAggregateInput } from './encounter-slots-sum-order-by-aggregate.input';

@InputType()
export class EncounterSlotsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    encounter_method_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    slot?: Identity<SortOrderInput>;

    @Field(() => SortOrder, {nullable:true})
    rarity?: `${SortOrder}`;

    @Field(() => EncounterSlotsCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<EncounterSlotsCountOrderByAggregateInput>;

    @Field(() => EncounterSlotsAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<EncounterSlotsAvgOrderByAggregateInput>;

    @Field(() => EncounterSlotsMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<EncounterSlotsMaxOrderByAggregateInput>;

    @Field(() => EncounterSlotsMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<EncounterSlotsMinOrderByAggregateInput>;

    @Field(() => EncounterSlotsSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<EncounterSlotsSumOrderByAggregateInput>;
}
