import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class EncounterConditionValueMapSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    encounter_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    encounter_condition_value_id?: `${SortOrder}`;
}
