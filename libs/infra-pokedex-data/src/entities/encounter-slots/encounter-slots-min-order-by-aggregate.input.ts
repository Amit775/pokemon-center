import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class EncounterSlotsMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    encounter_method_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    slot?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    rarity?: `${SortOrder}`;
}
