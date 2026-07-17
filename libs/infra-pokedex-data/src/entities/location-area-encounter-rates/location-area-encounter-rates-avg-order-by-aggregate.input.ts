import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class LocationAreaEncounterRatesAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    location_area_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    encounter_method_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    version_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    rate?: `${SortOrder}`;
}
