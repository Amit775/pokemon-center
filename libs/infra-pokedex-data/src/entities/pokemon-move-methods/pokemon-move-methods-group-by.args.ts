import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonMoveMethodsWhereInput } from './pokemon-move-methods-where.input';
import { Type } from 'class-transformer';
import { PokemonMoveMethodsOrderByWithAggregationInput } from './pokemon-move-methods-order-by-with-aggregation.input';
import { PokemonMoveMethodsScalarFieldEnum } from './pokemon-move-methods-scalar-field.enum';
import { PokemonMoveMethodsScalarWhereWithAggregatesInput } from './pokemon-move-methods-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PokemonMoveMethodsCountAggregateInput } from './pokemon-move-methods-count-aggregate.input';
import { PokemonMoveMethodsAvgAggregateInput } from './pokemon-move-methods-avg-aggregate.input';
import { PokemonMoveMethodsSumAggregateInput } from './pokemon-move-methods-sum-aggregate.input';
import { PokemonMoveMethodsMinAggregateInput } from './pokemon-move-methods-min-aggregate.input';
import { PokemonMoveMethodsMaxAggregateInput } from './pokemon-move-methods-max-aggregate.input';

@ArgsType()
export class PokemonMoveMethodsGroupByArgs {

    @Field(() => PokemonMoveMethodsWhereInput, {nullable:true})
    @Type(() => PokemonMoveMethodsWhereInput)
    where?: Identity<PokemonMoveMethodsWhereInput>;

    @Field(() => [PokemonMoveMethodsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PokemonMoveMethodsOrderByWithAggregationInput>;

    @Field(() => [PokemonMoveMethodsScalarFieldEnum], {nullable:false})
    by!: Array<`${PokemonMoveMethodsScalarFieldEnum}`>;

    @Field(() => PokemonMoveMethodsScalarWhereWithAggregatesInput, {nullable:true})
    having?: Identity<PokemonMoveMethodsScalarWhereWithAggregatesInput>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonMoveMethodsCountAggregateInput, {nullable:true})
    _count?: Identity<PokemonMoveMethodsCountAggregateInput>;

    @Field(() => PokemonMoveMethodsAvgAggregateInput, {nullable:true})
    _avg?: Identity<PokemonMoveMethodsAvgAggregateInput>;

    @Field(() => PokemonMoveMethodsSumAggregateInput, {nullable:true})
    _sum?: Identity<PokemonMoveMethodsSumAggregateInput>;

    @Field(() => PokemonMoveMethodsMinAggregateInput, {nullable:true})
    _min?: Identity<PokemonMoveMethodsMinAggregateInput>;

    @Field(() => PokemonMoveMethodsMaxAggregateInput, {nullable:true})
    _max?: Identity<PokemonMoveMethodsMaxAggregateInput>;
}
