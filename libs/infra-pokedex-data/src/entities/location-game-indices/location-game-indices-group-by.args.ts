import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationGameIndicesWhereInput } from './location-game-indices-where.input';
import { Type } from 'class-transformer';
import { LocationGameIndicesOrderByWithAggregationInput } from './location-game-indices-order-by-with-aggregation.input';
import { LocationGameIndicesScalarFieldEnum } from './location-game-indices-scalar-field.enum';
import { LocationGameIndicesScalarWhereWithAggregatesInput } from './location-game-indices-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { LocationGameIndicesCountAggregateInput } from './location-game-indices-count-aggregate.input';
import { LocationGameIndicesAvgAggregateInput } from './location-game-indices-avg-aggregate.input';
import { LocationGameIndicesSumAggregateInput } from './location-game-indices-sum-aggregate.input';
import { LocationGameIndicesMinAggregateInput } from './location-game-indices-min-aggregate.input';
import { LocationGameIndicesMaxAggregateInput } from './location-game-indices-max-aggregate.input';

@ArgsType()
export class LocationGameIndicesGroupByArgs {

    @Field(() => LocationGameIndicesWhereInput, {nullable:true})
    @Type(() => LocationGameIndicesWhereInput)
    where?: LocationGameIndicesWhereInput;

    @Field(() => [LocationGameIndicesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LocationGameIndicesOrderByWithAggregationInput>;

    @Field(() => [LocationGameIndicesScalarFieldEnum], {nullable:false})
    by!: Array<`${LocationGameIndicesScalarFieldEnum}`>;

    @Field(() => LocationGameIndicesScalarWhereWithAggregatesInput, {nullable:true})
    having?: LocationGameIndicesScalarWhereWithAggregatesInput;

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
