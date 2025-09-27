import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
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
    slot?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    rarity?: `${SortOrder}`;

    @Field(() => EncounterSlotsCountOrderByAggregateInput, {nullable:true})
    _count?: EncounterSlotsCountOrderByAggregateInput;

    @Field(() => EncounterSlotsAvgOrderByAggregateInput, {nullable:true})
    _avg?: EncounterSlotsAvgOrderByAggregateInput;

    @Field(() => EncounterSlotsMaxOrderByAggregateInput, {nullable:true})
    _max?: EncounterSlotsMaxOrderByAggregateInput;

    @Field(() => EncounterSlotsMinOrderByAggregateInput, {nullable:true})
    _min?: EncounterSlotsMinOrderByAggregateInput;

    @Field(() => EncounterSlotsSumOrderByAggregateInput, {nullable:true})
    _sum?: EncounterSlotsSumOrderByAggregateInput;
}
