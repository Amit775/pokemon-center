import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TypeEfficacyAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    damage_type_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    target_type_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    damage_factor?: `${SortOrder}`;
}
