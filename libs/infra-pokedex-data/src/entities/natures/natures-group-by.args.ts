import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NaturesWhereInput } from './natures-where.input';
import { Type } from 'class-transformer';
import { NaturesOrderByWithAggregationInput } from './natures-order-by-with-aggregation.input';
import { NaturesScalarFieldEnum } from './natures-scalar-field.enum';
import { NaturesScalarWhereWithAggregatesInput } from './natures-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { NaturesCountAggregateInput } from './natures-count-aggregate.input';
import { NaturesAvgAggregateInput } from './natures-avg-aggregate.input';
import { NaturesSumAggregateInput } from './natures-sum-aggregate.input';
import { NaturesMinAggregateInput } from './natures-min-aggregate.input';
import { NaturesMaxAggregateInput } from './natures-max-aggregate.input';

@ArgsType()
export class NaturesGroupByArgs {

    @Field(() => NaturesWhereInput, {nullable:true})
    @Type(() => NaturesWhereInput)
    where?: Identity<NaturesWhereInput>;

    @Field(() => [NaturesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<NaturesOrderByWithAggregationInput>;

    @Field(() => [NaturesScalarFieldEnum], {nullable:false})
    by!: Array<`${NaturesScalarFieldEnum}`>;

    @Field(() => NaturesScalarWhereWithAggregatesInput, {nullable:true})
    having?: Identity<NaturesScalarWhereWithAggregatesInput>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => NaturesCountAggregateInput, {nullable:true})
    _count?: Identity<NaturesCountAggregateInput>;

    @Field(() => NaturesAvgAggregateInput, {nullable:true})
    _avg?: Identity<NaturesAvgAggregateInput>;

    @Field(() => NaturesSumAggregateInput, {nullable:true})
    _sum?: Identity<NaturesSumAggregateInput>;

    @Field(() => NaturesMinAggregateInput, {nullable:true})
    _min?: Identity<NaturesMinAggregateInput>;

    @Field(() => NaturesMaxAggregateInput, {nullable:true})
    _max?: Identity<NaturesMaxAggregateInput>;
}
