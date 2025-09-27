import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BerryFirmnessWhereInput } from './berry-firmness-where.input';
import { Type } from 'class-transformer';
import { BerryFirmnessOrderByWithAggregationInput } from './berry-firmness-order-by-with-aggregation.input';
import { BerryFirmnessScalarFieldEnum } from './berry-firmness-scalar-field.enum';
import { BerryFirmnessScalarWhereWithAggregatesInput } from './berry-firmness-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BerryFirmnessCountAggregateInput } from './berry-firmness-count-aggregate.input';
import { BerryFirmnessAvgAggregateInput } from './berry-firmness-avg-aggregate.input';
import { BerryFirmnessSumAggregateInput } from './berry-firmness-sum-aggregate.input';
import { BerryFirmnessMinAggregateInput } from './berry-firmness-min-aggregate.input';
import { BerryFirmnessMaxAggregateInput } from './berry-firmness-max-aggregate.input';

@ArgsType()
export class BerryFirmnessGroupByArgs {

    @Field(() => BerryFirmnessWhereInput, {nullable:true})
    @Type(() => BerryFirmnessWhereInput)
    where?: BerryFirmnessWhereInput;

    @Field(() => [BerryFirmnessOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BerryFirmnessOrderByWithAggregationInput>;

    @Field(() => [BerryFirmnessScalarFieldEnum], {nullable:false})
    by!: Array<`${BerryFirmnessScalarFieldEnum}`>;

    @Field(() => BerryFirmnessScalarWhereWithAggregatesInput, {nullable:true})
    having?: BerryFirmnessScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BerryFirmnessCountAggregateInput, {nullable:true})
    _count?: BerryFirmnessCountAggregateInput;

    @Field(() => BerryFirmnessAvgAggregateInput, {nullable:true})
    _avg?: BerryFirmnessAvgAggregateInput;

    @Field(() => BerryFirmnessSumAggregateInput, {nullable:true})
    _sum?: BerryFirmnessSumAggregateInput;

    @Field(() => BerryFirmnessMinAggregateInput, {nullable:true})
    _min?: BerryFirmnessMinAggregateInput;

    @Field(() => BerryFirmnessMaxAggregateInput, {nullable:true})
    _max?: BerryFirmnessMaxAggregateInput;
}
