import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GrowthRatesWhereInput } from './growth-rates-where.input';
import { Type } from 'class-transformer';
import { GrowthRatesOrderByWithRelationInput } from './growth-rates-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { GrowthRatesWhereUniqueInput } from './growth-rates-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GrowthRatesCountAggregateInput } from './growth-rates-count-aggregate.input';
import { GrowthRatesAvgAggregateInput } from './growth-rates-avg-aggregate.input';
import { GrowthRatesSumAggregateInput } from './growth-rates-sum-aggregate.input';
import { GrowthRatesMinAggregateInput } from './growth-rates-min-aggregate.input';
import { GrowthRatesMaxAggregateInput } from './growth-rates-max-aggregate.input';

@ArgsType()
export class GrowthRatesAggregateArgs {

    @Field(() => GrowthRatesWhereInput, {nullable:true})
    @Type(() => GrowthRatesWhereInput)
    where?: GrowthRatesWhereInput;

    @Field(() => [GrowthRatesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GrowthRatesOrderByWithRelationInput>;

    @Field(() => GrowthRatesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<GrowthRatesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GrowthRatesCountAggregateInput, {nullable:true})
    _count?: GrowthRatesCountAggregateInput;

    @Field(() => GrowthRatesAvgAggregateInput, {nullable:true})
    _avg?: GrowthRatesAvgAggregateInput;

    @Field(() => GrowthRatesSumAggregateInput, {nullable:true})
    _sum?: GrowthRatesSumAggregateInput;

    @Field(() => GrowthRatesMinAggregateInput, {nullable:true})
    _min?: GrowthRatesMinAggregateInput;

    @Field(() => GrowthRatesMaxAggregateInput, {nullable:true})
    _max?: GrowthRatesMaxAggregateInput;
}
