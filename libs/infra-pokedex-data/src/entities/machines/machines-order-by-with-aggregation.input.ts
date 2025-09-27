import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MachinesCountOrderByAggregateInput } from './machines-count-order-by-aggregate.input';
import { MachinesAvgOrderByAggregateInput } from './machines-avg-order-by-aggregate.input';
import { MachinesMaxOrderByAggregateInput } from './machines-max-order-by-aggregate.input';
import { MachinesMinOrderByAggregateInput } from './machines-min-order-by-aggregate.input';
import { MachinesSumOrderByAggregateInput } from './machines-sum-order-by-aggregate.input';

@InputType()
export class MachinesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    machine_number?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    item_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    move_id?: `${SortOrder}`;

    @Field(() => MachinesCountOrderByAggregateInput, {nullable:true})
    _count?: MachinesCountOrderByAggregateInput;

    @Field(() => MachinesAvgOrderByAggregateInput, {nullable:true})
    _avg?: MachinesAvgOrderByAggregateInput;

    @Field(() => MachinesMaxOrderByAggregateInput, {nullable:true})
    _max?: MachinesMaxOrderByAggregateInput;

    @Field(() => MachinesMinOrderByAggregateInput, {nullable:true})
    _min?: MachinesMinOrderByAggregateInput;

    @Field(() => MachinesSumOrderByAggregateInput, {nullable:true})
    _sum?: MachinesSumOrderByAggregateInput;
}
