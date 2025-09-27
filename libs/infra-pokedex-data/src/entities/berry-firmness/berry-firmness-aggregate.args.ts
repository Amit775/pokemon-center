import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BerryFirmnessWhereInput } from './berry-firmness-where.input';
import { Type } from 'class-transformer';
import { BerryFirmnessOrderByWithRelationInput } from './berry-firmness-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BerryFirmnessWhereUniqueInput } from './berry-firmness-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BerryFirmnessCountAggregateInput } from './berry-firmness-count-aggregate.input';
import { BerryFirmnessAvgAggregateInput } from './berry-firmness-avg-aggregate.input';
import { BerryFirmnessSumAggregateInput } from './berry-firmness-sum-aggregate.input';
import { BerryFirmnessMinAggregateInput } from './berry-firmness-min-aggregate.input';
import { BerryFirmnessMaxAggregateInput } from './berry-firmness-max-aggregate.input';

@ArgsType()
export class BerryFirmnessAggregateArgs {

    @Field(() => BerryFirmnessWhereInput, {nullable:true})
    @Type(() => BerryFirmnessWhereInput)
    where?: BerryFirmnessWhereInput;

    @Field(() => [BerryFirmnessOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BerryFirmnessOrderByWithRelationInput>;

    @Field(() => BerryFirmnessWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BerryFirmnessWhereUniqueInput, 'id'>;

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
