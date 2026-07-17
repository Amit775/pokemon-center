import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionsWhereInput } from './versions-where.input';
import { Type } from 'class-transformer';
import { VersionsOrderByWithAggregationInput } from './versions-order-by-with-aggregation.input';
import { VersionsScalarFieldEnum } from './versions-scalar-field.enum';
import { VersionsScalarWhereWithAggregatesInput } from './versions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { VersionsCountAggregateInput } from './versions-count-aggregate.input';
import { VersionsAvgAggregateInput } from './versions-avg-aggregate.input';
import { VersionsSumAggregateInput } from './versions-sum-aggregate.input';
import { VersionsMinAggregateInput } from './versions-min-aggregate.input';
import { VersionsMaxAggregateInput } from './versions-max-aggregate.input';

@ArgsType()
export class VersionsGroupByArgs {

    @Field(() => VersionsWhereInput, {nullable:true})
    @Type(() => VersionsWhereInput)
    where?: Identity<VersionsWhereInput>;

    @Field(() => [VersionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<VersionsOrderByWithAggregationInput>;

    @Field(() => [VersionsScalarFieldEnum], {nullable:false})
    by!: Array<`${VersionsScalarFieldEnum}`>;

    @Field(() => VersionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: Identity<VersionsScalarWhereWithAggregatesInput>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => VersionsCountAggregateInput, {nullable:true})
    _count?: Identity<VersionsCountAggregateInput>;

    @Field(() => VersionsAvgAggregateInput, {nullable:true})
    _avg?: Identity<VersionsAvgAggregateInput>;

    @Field(() => VersionsSumAggregateInput, {nullable:true})
    _sum?: Identity<VersionsSumAggregateInput>;

    @Field(() => VersionsMinAggregateInput, {nullable:true})
    _min?: Identity<VersionsMinAggregateInput>;

    @Field(() => VersionsMaxAggregateInput, {nullable:true})
    _max?: Identity<VersionsMaxAggregateInput>;
}
