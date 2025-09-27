import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationGameIndicesWhereInput } from './location-game-indices-where.input';
import { Type } from 'class-transformer';
import { LocationGameIndicesOrderByWithRelationInput } from './location-game-indices-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LocationGameIndicesWhereUniqueInput } from './location-game-indices-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LocationGameIndicesCountAggregateInput } from './location-game-indices-count-aggregate.input';
import { LocationGameIndicesAvgAggregateInput } from './location-game-indices-avg-aggregate.input';
import { LocationGameIndicesSumAggregateInput } from './location-game-indices-sum-aggregate.input';
import { LocationGameIndicesMinAggregateInput } from './location-game-indices-min-aggregate.input';
import { LocationGameIndicesMaxAggregateInput } from './location-game-indices-max-aggregate.input';

@ArgsType()
export class LocationGameIndicesAggregateArgs {

    @Field(() => LocationGameIndicesWhereInput, {nullable:true})
    @Type(() => LocationGameIndicesWhereInput)
    where?: LocationGameIndicesWhereInput;

    @Field(() => [LocationGameIndicesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LocationGameIndicesOrderByWithRelationInput>;

    @Field(() => LocationGameIndicesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LocationGameIndicesWhereUniqueInput, 'location_id_generation_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LocationGameIndicesCountAggregateInput, {nullable:true})
    _count?: LocationGameIndicesCountAggregateInput;

    @Field(() => LocationGameIndicesAvgAggregateInput, {nullable:true})
    _avg?: LocationGameIndicesAvgAggregateInput;

    @Field(() => LocationGameIndicesSumAggregateInput, {nullable:true})
    _sum?: LocationGameIndicesSumAggregateInput;

    @Field(() => LocationGameIndicesMinAggregateInput, {nullable:true})
    _min?: LocationGameIndicesMinAggregateInput;

    @Field(() => LocationGameIndicesMaxAggregateInput, {nullable:true})
    _max?: LocationGameIndicesMaxAggregateInput;
}
