import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EncountersCountOrderByAggregateInput } from './encounters-count-order-by-aggregate.input';
import { EncountersAvgOrderByAggregateInput } from './encounters-avg-order-by-aggregate.input';
import { EncountersMaxOrderByAggregateInput } from './encounters-max-order-by-aggregate.input';
import { EncountersMinOrderByAggregateInput } from './encounters-min-order-by-aggregate.input';
import { EncountersSumOrderByAggregateInput } from './encounters-sum-order-by-aggregate.input';

@InputType()
export class EncountersOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    version_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    location_area_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    encounter_slot_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    min_level?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    max_level?: `${SortOrder}`;

    @Field(() => EncountersCountOrderByAggregateInput, {nullable:true})
    _count?: EncountersCountOrderByAggregateInput;

    @Field(() => EncountersAvgOrderByAggregateInput, {nullable:true})
    _avg?: EncountersAvgOrderByAggregateInput;

    @Field(() => EncountersMaxOrderByAggregateInput, {nullable:true})
    _max?: EncountersMaxOrderByAggregateInput;

    @Field(() => EncountersMinOrderByAggregateInput, {nullable:true})
    _min?: EncountersMinOrderByAggregateInput;

    @Field(() => EncountersSumOrderByAggregateInput, {nullable:true})
    _sum?: EncountersSumOrderByAggregateInput;
}
