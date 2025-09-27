import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegionsWhereInput } from './regions-where.input';
import { Type } from 'class-transformer';
import { RegionsOrderByWithAggregationInput } from './regions-order-by-with-aggregation.input';
import { RegionsScalarFieldEnum } from './regions-scalar-field.enum';
import { RegionsScalarWhereWithAggregatesInput } from './regions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RegionsCountAggregateInput } from './regions-count-aggregate.input';
import { RegionsAvgAggregateInput } from './regions-avg-aggregate.input';
import { RegionsSumAggregateInput } from './regions-sum-aggregate.input';
import { RegionsMinAggregateInput } from './regions-min-aggregate.input';
import { RegionsMaxAggregateInput } from './regions-max-aggregate.input';

@ArgsType()
export class RegionsGroupByArgs {

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    where?: RegionsWhereInput;

    @Field(() => [RegionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RegionsOrderByWithAggregationInput>;

    @Field(() => [RegionsScalarFieldEnum], {nullable:false})
    by!: Array<`${RegionsScalarFieldEnum}`>;

    @Field(() => RegionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: RegionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RegionsCountAggregateInput, {nullable:true})
    _count?: RegionsCountAggregateInput;

    @Field(() => RegionsAvgAggregateInput, {nullable:true})
    _avg?: RegionsAvgAggregateInput;

    @Field(() => RegionsSumAggregateInput, {nullable:true})
    _sum?: RegionsSumAggregateInput;

    @Field(() => RegionsMinAggregateInput, {nullable:true})
    _min?: RegionsMinAggregateInput;

    @Field(() => RegionsMaxAggregateInput, {nullable:true})
    _max?: RegionsMaxAggregateInput;
}
