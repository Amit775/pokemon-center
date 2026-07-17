import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationsWhereInput } from './locations-where.input';
import { Type } from 'class-transformer';
import { LocationsOrderByWithRelationInput } from './locations-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { LocationsWhereUniqueInput } from './locations-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LocationsCountAggregateInput } from './locations-count-aggregate.input';
import { LocationsAvgAggregateInput } from './locations-avg-aggregate.input';
import { LocationsSumAggregateInput } from './locations-sum-aggregate.input';
import { LocationsMinAggregateInput } from './locations-min-aggregate.input';
import { LocationsMaxAggregateInput } from './locations-max-aggregate.input';

@ArgsType()
export class LocationsAggregateArgs {

    @Field(() => LocationsWhereInput, {nullable:true})
    @Type(() => LocationsWhereInput)
    where?: Identity<LocationsWhereInput>;

    @Field(() => [LocationsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LocationsOrderByWithRelationInput>;

    @Field(() => LocationsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LocationsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LocationsCountAggregateInput, {nullable:true})
    _count?: Identity<LocationsCountAggregateInput>;

    @Field(() => LocationsAvgAggregateInput, {nullable:true})
    _avg?: Identity<LocationsAvgAggregateInput>;

    @Field(() => LocationsSumAggregateInput, {nullable:true})
    _sum?: Identity<LocationsSumAggregateInput>;

    @Field(() => LocationsMinAggregateInput, {nullable:true})
    _min?: Identity<LocationsMinAggregateInput>;

    @Field(() => LocationsMaxAggregateInput, {nullable:true})
    _max?: Identity<LocationsMaxAggregateInput>;
}
