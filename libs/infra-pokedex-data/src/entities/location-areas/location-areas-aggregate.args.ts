import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationAreasWhereInput } from './location-areas-where.input';
import { Type } from 'class-transformer';
import { LocationAreasOrderByWithRelationInput } from './location-areas-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LocationAreasWhereUniqueInput } from './location-areas-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LocationAreasCountAggregateInput } from './location-areas-count-aggregate.input';
import { LocationAreasAvgAggregateInput } from './location-areas-avg-aggregate.input';
import { LocationAreasSumAggregateInput } from './location-areas-sum-aggregate.input';
import { LocationAreasMinAggregateInput } from './location-areas-min-aggregate.input';
import { LocationAreasMaxAggregateInput } from './location-areas-max-aggregate.input';

@ArgsType()
export class LocationAreasAggregateArgs {

    @Field(() => LocationAreasWhereInput, {nullable:true})
    @Type(() => LocationAreasWhereInput)
    where?: LocationAreasWhereInput;

    @Field(() => [LocationAreasOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LocationAreasOrderByWithRelationInput>;

    @Field(() => LocationAreasWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LocationAreasWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LocationAreasCountAggregateInput, {nullable:true})
    _count?: LocationAreasCountAggregateInput;

    @Field(() => LocationAreasAvgAggregateInput, {nullable:true})
    _avg?: LocationAreasAvgAggregateInput;

    @Field(() => LocationAreasSumAggregateInput, {nullable:true})
    _sum?: LocationAreasSumAggregateInput;

    @Field(() => LocationAreasMinAggregateInput, {nullable:true})
    _min?: LocationAreasMinAggregateInput;

    @Field(() => LocationAreasMaxAggregateInput, {nullable:true})
    _max?: LocationAreasMaxAggregateInput;
}
