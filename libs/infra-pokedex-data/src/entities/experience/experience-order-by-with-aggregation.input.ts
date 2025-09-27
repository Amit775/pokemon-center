import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ExperienceCountOrderByAggregateInput } from './experience-count-order-by-aggregate.input';
import { ExperienceAvgOrderByAggregateInput } from './experience-avg-order-by-aggregate.input';
import { ExperienceMaxOrderByAggregateInput } from './experience-max-order-by-aggregate.input';
import { ExperienceMinOrderByAggregateInput } from './experience-min-order-by-aggregate.input';
import { ExperienceSumOrderByAggregateInput } from './experience-sum-order-by-aggregate.input';

@InputType()
export class ExperienceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    growth_rate_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    level?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    experience?: `${SortOrder}`;

    @Field(() => ExperienceCountOrderByAggregateInput, {nullable:true})
    _count?: ExperienceCountOrderByAggregateInput;

    @Field(() => ExperienceAvgOrderByAggregateInput, {nullable:true})
    _avg?: ExperienceAvgOrderByAggregateInput;

    @Field(() => ExperienceMaxOrderByAggregateInput, {nullable:true})
    _max?: ExperienceMaxOrderByAggregateInput;

    @Field(() => ExperienceMinOrderByAggregateInput, {nullable:true})
    _min?: ExperienceMinOrderByAggregateInput;

    @Field(() => ExperienceSumOrderByAggregateInput, {nullable:true})
    _sum?: ExperienceSumOrderByAggregateInput;
}
