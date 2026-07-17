import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonWhereInput } from './pokemon-where.input';
import { Type } from 'class-transformer';
import { PokemonOrderByWithAggregationInput } from './pokemon-order-by-with-aggregation.input';
import { PokemonScalarFieldEnum } from './pokemon-scalar-field.enum';
import { PokemonScalarWhereWithAggregatesInput } from './pokemon-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PokemonCountAggregateInput } from './pokemon-count-aggregate.input';
import { PokemonAvgAggregateInput } from './pokemon-avg-aggregate.input';
import { PokemonSumAggregateInput } from './pokemon-sum-aggregate.input';
import { PokemonMinAggregateInput } from './pokemon-min-aggregate.input';
import { PokemonMaxAggregateInput } from './pokemon-max-aggregate.input';

@ArgsType()
export class PokemonGroupByArgs {

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: Identity<PokemonWhereInput>;

    @Field(() => [PokemonOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PokemonOrderByWithAggregationInput>;

    @Field(() => [PokemonScalarFieldEnum], {nullable:false})
    by!: Array<`${PokemonScalarFieldEnum}`>;

    @Field(() => PokemonScalarWhereWithAggregatesInput, {nullable:true})
    having?: Identity<PokemonScalarWhereWithAggregatesInput>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonCountAggregateInput, {nullable:true})
    _count?: Identity<PokemonCountAggregateInput>;

    @Field(() => PokemonAvgAggregateInput, {nullable:true})
    _avg?: Identity<PokemonAvgAggregateInput>;

    @Field(() => PokemonSumAggregateInput, {nullable:true})
    _sum?: Identity<PokemonSumAggregateInput>;

    @Field(() => PokemonMinAggregateInput, {nullable:true})
    _min?: Identity<PokemonMinAggregateInput>;

    @Field(() => PokemonMaxAggregateInput, {nullable:true})
    _max?: Identity<PokemonMaxAggregateInput>;
}
