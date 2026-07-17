import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class LanguagesMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    iso639?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    iso3166?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    official?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    order?: `${SortOrder}`;
}
