import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VersionGroupsWhereInput } from './version-groups-where.input';
import { Type } from 'class-transformer';
import { VersionGroupsOrderByWithAggregationInput } from './version-groups-order-by-with-aggregation.input';
import { VersionGroupsScalarFieldEnum } from './version-groups-scalar-field.enum';
import { VersionGroupsScalarWhereWithAggregatesInput } from './version-groups-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { VersionGroupsCountAggregateInput } from './version-groups-count-aggregate.input';
import { VersionGroupsAvgAggregateInput } from './version-groups-avg-aggregate.input';
import { VersionGroupsSumAggregateInput } from './version-groups-sum-aggregate.input';
import { VersionGroupsMinAggregateInput } from './version-groups-min-aggregate.input';
import { VersionGroupsMaxAggregateInput } from './version-groups-max-aggregate.input';

@ArgsType()
export class VersionGroupsGroupByArgs {

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: VersionGroupsWhereInput;

    @Field(() => [VersionGroupsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<VersionGroupsOrderByWithAggregationInput>;

    @Field(() => [VersionGroupsScalarFieldEnum], {nullable:false})
    by!: Array<`${VersionGroupsScalarFieldEnum}`>;

    @Field(() => VersionGroupsScalarWhereWithAggregatesInput, {nullable:true})
    having?: VersionGroupsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => VersionGroupsCountAggregateInput, {nullable:true})
    _count?: VersionGroupsCountAggregateInput;

    @Field(() => VersionGroupsAvgAggregateInput, {nullable:true})
    _avg?: VersionGroupsAvgAggregateInput;

    @Field(() => VersionGroupsSumAggregateInput, {nullable:true})
    _sum?: VersionGroupsSumAggregateInput;

    @Field(() => VersionGroupsMinAggregateInput, {nullable:true})
    _min?: VersionGroupsMinAggregateInput;

    @Field(() => VersionGroupsMaxAggregateInput, {nullable:true})
    _max?: VersionGroupsMaxAggregateInput;
}
