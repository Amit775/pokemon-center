import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MoveFlagMapMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    move_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    move_flag_id?: `${SortOrder}`;
}
