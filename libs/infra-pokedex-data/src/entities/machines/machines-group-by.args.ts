import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MachinesWhereInput } from './machines-where.input';
import { Type } from 'class-transformer';
import { MachinesOrderByWithAggregationInput } from './machines-order-by-with-aggregation.input';
import { MachinesScalarFieldEnum } from './machines-scalar-field.enum';
import { MachinesScalarWhereWithAggregatesInput } from './machines-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MachinesCountAggregateInput } from './machines-count-aggregate.input';
import { MachinesAvgAggregateInput } from './machines-avg-aggregate.input';
import { MachinesSumAggregateInput } from './machines-sum-aggregate.input';
import { MachinesMinAggregateInput } from './machines-min-aggregate.input';
import { MachinesMaxAggregateInput } from './machines-max-aggregate.input';

@ArgsType()
export class MachinesGroupByArgs {

    @Field(() => MachinesWhereInput, {nullable:true})
    @Type(() => MachinesWhereInput)
    where?: Identity<MachinesWhereInput>;

    @Field(() => [MachinesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MachinesOrderByWithAggregationInput>;

    @Field(() => [MachinesScalarFieldEnum], {nullable:false})
    by!: Array<`${MachinesScalarFieldEnum}`>;

    @Field(() => MachinesScalarWhereWithAggregatesInput, {nullable:true})
    having?: Identity<MachinesScalarWhereWithAggregatesInput>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MachinesCountAggregateInput, {nullable:true})
    _count?: Identity<MachinesCountAggregateInput>;

    @Field(() => MachinesAvgAggregateInput, {nullable:true})
    _avg?: Identity<MachinesAvgAggregateInput>;

    @Field(() => MachinesSumAggregateInput, {nullable:true})
    _sum?: Identity<MachinesSumAggregateInput>;

    @Field(() => MachinesMinAggregateInput, {nullable:true})
    _min?: Identity<MachinesMinAggregateInput>;

    @Field(() => MachinesMaxAggregateInput, {nullable:true})
    _max?: Identity<MachinesMaxAggregateInput>;
}
