import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MoveMetaAilmentsCountOrderByAggregateInput } from './move-meta-ailments-count-order-by-aggregate.input';
import { MoveMetaAilmentsAvgOrderByAggregateInput } from './move-meta-ailments-avg-order-by-aggregate.input';
import { MoveMetaAilmentsMaxOrderByAggregateInput } from './move-meta-ailments-max-order-by-aggregate.input';
import { MoveMetaAilmentsMinOrderByAggregateInput } from './move-meta-ailments-min-order-by-aggregate.input';
import { MoveMetaAilmentsSumOrderByAggregateInput } from './move-meta-ailments-sum-order-by-aggregate.input';

@InputType()
export class MoveMetaAilmentsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => MoveMetaAilmentsCountOrderByAggregateInput, {nullable:true})
    _count?: MoveMetaAilmentsCountOrderByAggregateInput;

    @Field(() => MoveMetaAilmentsAvgOrderByAggregateInput, {nullable:true})
    _avg?: MoveMetaAilmentsAvgOrderByAggregateInput;

    @Field(() => MoveMetaAilmentsMaxOrderByAggregateInput, {nullable:true})
    _max?: MoveMetaAilmentsMaxOrderByAggregateInput;

    @Field(() => MoveMetaAilmentsMinOrderByAggregateInput, {nullable:true})
    _min?: MoveMetaAilmentsMinOrderByAggregateInput;

    @Field(() => MoveMetaAilmentsSumOrderByAggregateInput, {nullable:true})
    _sum?: MoveMetaAilmentsSumOrderByAggregateInput;
}
