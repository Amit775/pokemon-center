import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEvolutionWhereInput } from './pokemon-evolution-where.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionOrderByWithAggregationInput } from './pokemon-evolution-order-by-with-aggregation.input';
import { PokemonEvolutionScalarFieldEnum } from './pokemon-evolution-scalar-field.enum';
import { PokemonEvolutionScalarWhereWithAggregatesInput } from './pokemon-evolution-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PokemonEvolutionCountAggregateInput } from './pokemon-evolution-count-aggregate.input';
import { PokemonEvolutionAvgAggregateInput } from './pokemon-evolution-avg-aggregate.input';
import { PokemonEvolutionSumAggregateInput } from './pokemon-evolution-sum-aggregate.input';
import { PokemonEvolutionMinAggregateInput } from './pokemon-evolution-min-aggregate.input';
import { PokemonEvolutionMaxAggregateInput } from './pokemon-evolution-max-aggregate.input';

@ArgsType()
export class PokemonEvolutionGroupByArgs {

    @Field(() => PokemonEvolutionWhereInput, {nullable:true})
    @Type(() => PokemonEvolutionWhereInput)
    where?: Identity<PokemonEvolutionWhereInput>;

    @Field(() => [PokemonEvolutionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PokemonEvolutionOrderByWithAggregationInput>;

    @Field(() => [PokemonEvolutionScalarFieldEnum], {nullable:false})
    by!: Array<`${PokemonEvolutionScalarFieldEnum}`>;

    @Field(() => PokemonEvolutionScalarWhereWithAggregatesInput, {nullable:true})
    having?: Identity<PokemonEvolutionScalarWhereWithAggregatesInput>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonEvolutionCountAggregateInput, {nullable:true})
    _count?: Identity<PokemonEvolutionCountAggregateInput>;

    @Field(() => PokemonEvolutionAvgAggregateInput, {nullable:true})
    _avg?: Identity<PokemonEvolutionAvgAggregateInput>;

    @Field(() => PokemonEvolutionSumAggregateInput, {nullable:true})
    _sum?: Identity<PokemonEvolutionSumAggregateInput>;

    @Field(() => PokemonEvolutionMinAggregateInput, {nullable:true})
    _min?: Identity<PokemonEvolutionMinAggregateInput>;

    @Field(() => PokemonEvolutionMaxAggregateInput, {nullable:true})
    _max?: Identity<PokemonEvolutionMaxAggregateInput>;
}
