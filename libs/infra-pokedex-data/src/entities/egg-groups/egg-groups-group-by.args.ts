import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EggGroupsWhereInput } from './egg-groups-where.input';
import { Type } from 'class-transformer';
import { EggGroupsOrderByWithAggregationInput } from './egg-groups-order-by-with-aggregation.input';
import { EggGroupsScalarFieldEnum } from './egg-groups-scalar-field.enum';
import { EggGroupsScalarWhereWithAggregatesInput } from './egg-groups-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EggGroupsCountAggregateInput } from './egg-groups-count-aggregate.input';
import { EggGroupsAvgAggregateInput } from './egg-groups-avg-aggregate.input';
import { EggGroupsSumAggregateInput } from './egg-groups-sum-aggregate.input';
import { EggGroupsMinAggregateInput } from './egg-groups-min-aggregate.input';
import { EggGroupsMaxAggregateInput } from './egg-groups-max-aggregate.input';

@ArgsType()
export class EggGroupsGroupByArgs {

    @Field(() => EggGroupsWhereInput, {nullable:true})
    @Type(() => EggGroupsWhereInput)
    where?: EggGroupsWhereInput;

    @Field(() => [EggGroupsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EggGroupsOrderByWithAggregationInput>;

    @Field(() => [EggGroupsScalarFieldEnum], {nullable:false})
    by!: Array<`${EggGroupsScalarFieldEnum}`>;

    @Field(() => EggGroupsScalarWhereWithAggregatesInput, {nullable:true})
    having?: EggGroupsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EggGroupsCountAggregateInput, {nullable:true})
    _count?: EggGroupsCountAggregateInput;

    @Field(() => EggGroupsAvgAggregateInput, {nullable:true})
    _avg?: EggGroupsAvgAggregateInput;

    @Field(() => EggGroupsSumAggregateInput, {nullable:true})
    _sum?: EggGroupsSumAggregateInput;

    @Field(() => EggGroupsMinAggregateInput, {nullable:true})
    _min?: EggGroupsMinAggregateInput;

    @Field(() => EggGroupsMaxAggregateInput, {nullable:true})
    _max?: EggGroupsMaxAggregateInput;
}
