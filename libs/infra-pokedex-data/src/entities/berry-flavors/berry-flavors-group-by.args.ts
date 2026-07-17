import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerryFlavorsWhereInput } from './berry-flavors-where.input';
import { Type } from 'class-transformer';
import { BerryFlavorsOrderByWithAggregationInput } from './berry-flavors-order-by-with-aggregation.input';
import { BerryFlavorsScalarFieldEnum } from './berry-flavors-scalar-field.enum';
import { BerryFlavorsScalarWhereWithAggregatesInput } from './berry-flavors-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BerryFlavorsCountAggregateInput } from './berry-flavors-count-aggregate.input';
import { BerryFlavorsAvgAggregateInput } from './berry-flavors-avg-aggregate.input';
import { BerryFlavorsSumAggregateInput } from './berry-flavors-sum-aggregate.input';
import { BerryFlavorsMinAggregateInput } from './berry-flavors-min-aggregate.input';
import { BerryFlavorsMaxAggregateInput } from './berry-flavors-max-aggregate.input';

@ArgsType()
export class BerryFlavorsGroupByArgs {

    @Field(() => BerryFlavorsWhereInput, {nullable:true})
    @Type(() => BerryFlavorsWhereInput)
    where?: Identity<BerryFlavorsWhereInput>;

    @Field(() => [BerryFlavorsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BerryFlavorsOrderByWithAggregationInput>;

    @Field(() => [BerryFlavorsScalarFieldEnum], {nullable:false})
    by!: Array<`${BerryFlavorsScalarFieldEnum}`>;

    @Field(() => BerryFlavorsScalarWhereWithAggregatesInput, {nullable:true})
    having?: Identity<BerryFlavorsScalarWhereWithAggregatesInput>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BerryFlavorsCountAggregateInput, {nullable:true})
    _count?: Identity<BerryFlavorsCountAggregateInput>;

    @Field(() => BerryFlavorsAvgAggregateInput, {nullable:true})
    _avg?: Identity<BerryFlavorsAvgAggregateInput>;

    @Field(() => BerryFlavorsSumAggregateInput, {nullable:true})
    _sum?: Identity<BerryFlavorsSumAggregateInput>;

    @Field(() => BerryFlavorsMinAggregateInput, {nullable:true})
    _min?: Identity<BerryFlavorsMinAggregateInput>;

    @Field(() => BerryFlavorsMaxAggregateInput, {nullable:true})
    _max?: Identity<BerryFlavorsMaxAggregateInput>;
}
