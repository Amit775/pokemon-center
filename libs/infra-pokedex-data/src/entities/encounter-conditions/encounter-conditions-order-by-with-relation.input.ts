import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EncounterConditionValuesOrderByRelationAggregateInput } from '../encounter-condition-values/encounter-condition-values-order-by-relation-aggregate.input';

@InputType()
export class EncounterConditionsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => EncounterConditionValuesOrderByRelationAggregateInput, {nullable:true})
    values?: EncounterConditionValuesOrderByRelationAggregateInput;
}
