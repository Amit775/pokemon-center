import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BerryFlavorsMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    berry_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    contest_type_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    flavor?: `${SortOrder}`;
}
