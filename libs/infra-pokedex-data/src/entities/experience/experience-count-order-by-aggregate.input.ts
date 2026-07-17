import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ExperienceCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    growth_rate_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    level?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    experience?: `${SortOrder}`;
}
