import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonMovesWhereInput } from './pokemon-moves-where.input';
import { Type } from 'class-transformer';
import { PokemonMovesOrderByWithAggregationInput } from './pokemon-moves-order-by-with-aggregation.input';
import { PokemonMovesScalarFieldEnum } from './pokemon-moves-scalar-field.enum';
import { PokemonMovesScalarWhereWithAggregatesInput } from './pokemon-moves-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PokemonMovesCountAggregateInput } from './pokemon-moves-count-aggregate.input';
import { PokemonMovesAvgAggregateInput } from './pokemon-moves-avg-aggregate.input';
import { PokemonMovesSumAggregateInput } from './pokemon-moves-sum-aggregate.input';
import { PokemonMovesMinAggregateInput } from './pokemon-moves-min-aggregate.input';
import { PokemonMovesMaxAggregateInput } from './pokemon-moves-max-aggregate.input';

@ArgsType()
export class PokemonMovesGroupByArgs {

    @Field(() => PokemonMovesWhereInput, {nullable:true})
    @Type(() => PokemonMovesWhereInput)
    where?: Identity<PokemonMovesWhereInput>;

    @Field(() => [PokemonMovesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PokemonMovesOrderByWithAggregationInput>;

    @Field(() => [PokemonMovesScalarFieldEnum], {nullable:false})
    by!: Array<`${PokemonMovesScalarFieldEnum}`>;

    @Field(() => PokemonMovesScalarWhereWithAggregatesInput, {nullable:true})
    having?: Identity<PokemonMovesScalarWhereWithAggregatesInput>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonMovesCountAggregateInput, {nullable:true})
    _count?: Identity<PokemonMovesCountAggregateInput>;

    @Field(() => PokemonMovesAvgAggregateInput, {nullable:true})
    _avg?: Identity<PokemonMovesAvgAggregateInput>;

    @Field(() => PokemonMovesSumAggregateInput, {nullable:true})
    _sum?: Identity<PokemonMovesSumAggregateInput>;

    @Field(() => PokemonMovesMinAggregateInput, {nullable:true})
    _min?: Identity<PokemonMovesMinAggregateInput>;

    @Field(() => PokemonMovesMaxAggregateInput, {nullable:true})
    _max?: Identity<PokemonMovesMaxAggregateInput>;
}
