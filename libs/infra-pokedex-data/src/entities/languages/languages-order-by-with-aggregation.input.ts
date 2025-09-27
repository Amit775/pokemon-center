import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LanguagesCountOrderByAggregateInput } from './languages-count-order-by-aggregate.input';
import { LanguagesAvgOrderByAggregateInput } from './languages-avg-order-by-aggregate.input';
import { LanguagesMaxOrderByAggregateInput } from './languages-max-order-by-aggregate.input';
import { LanguagesMinOrderByAggregateInput } from './languages-min-order-by-aggregate.input';
import { LanguagesSumOrderByAggregateInput } from './languages-sum-order-by-aggregate.input';

@InputType()
export class LanguagesOrderByWithAggregationInput {

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

    @Field(() => LanguagesCountOrderByAggregateInput, {nullable:true})
    _count?: LanguagesCountOrderByAggregateInput;

    @Field(() => LanguagesAvgOrderByAggregateInput, {nullable:true})
    _avg?: LanguagesAvgOrderByAggregateInput;

    @Field(() => LanguagesMaxOrderByAggregateInput, {nullable:true})
    _max?: LanguagesMaxOrderByAggregateInput;

    @Field(() => LanguagesMinOrderByAggregateInput, {nullable:true})
    _min?: LanguagesMinOrderByAggregateInput;

    @Field(() => LanguagesSumOrderByAggregateInput, {nullable:true})
    _sum?: LanguagesSumOrderByAggregateInput;
}
