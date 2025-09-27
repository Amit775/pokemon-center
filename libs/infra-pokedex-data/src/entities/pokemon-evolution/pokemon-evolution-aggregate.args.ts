import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonEvolutionWhereInput } from './pokemon-evolution-where.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionOrderByWithRelationInput } from './pokemon-evolution-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonEvolutionCountAggregateInput } from './pokemon-evolution-count-aggregate.input';
import { PokemonEvolutionAvgAggregateInput } from './pokemon-evolution-avg-aggregate.input';
import { PokemonEvolutionSumAggregateInput } from './pokemon-evolution-sum-aggregate.input';
import { PokemonEvolutionMinAggregateInput } from './pokemon-evolution-min-aggregate.input';
import { PokemonEvolutionMaxAggregateInput } from './pokemon-evolution-max-aggregate.input';

@ArgsType()
export class PokemonEvolutionAggregateArgs {

    @Field(() => PokemonEvolutionWhereInput, {nullable:true})
    @Type(() => PokemonEvolutionWhereInput)
    where?: PokemonEvolutionWhereInput;

    @Field(() => [PokemonEvolutionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonEvolutionOrderByWithRelationInput>;

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonEvolutionCountAggregateInput, {nullable:true})
    _count?: PokemonEvolutionCountAggregateInput;

    @Field(() => PokemonEvolutionAvgAggregateInput, {nullable:true})
    _avg?: PokemonEvolutionAvgAggregateInput;

    @Field(() => PokemonEvolutionSumAggregateInput, {nullable:true})
    _sum?: PokemonEvolutionSumAggregateInput;

    @Field(() => PokemonEvolutionMinAggregateInput, {nullable:true})
    _min?: PokemonEvolutionMinAggregateInput;

    @Field(() => PokemonEvolutionMaxAggregateInput, {nullable:true})
    _max?: PokemonEvolutionMaxAggregateInput;
}
