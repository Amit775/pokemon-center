import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class EncounterConditionValuesAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    encounter_condition_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_default?: `${SortOrder}`;
}
