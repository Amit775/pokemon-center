import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonMoveMethodsWhereInput } from './pokemon-move-methods-where.input';
import { Type } from 'class-transformer';
import { PokemonMoveMethodsOrderByWithRelationInput } from './pokemon-move-methods-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonMoveMethodsWhereUniqueInput } from './pokemon-move-methods-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonMoveMethodsCountAggregateInput } from './pokemon-move-methods-count-aggregate.input';
import { PokemonMoveMethodsAvgAggregateInput } from './pokemon-move-methods-avg-aggregate.input';
import { PokemonMoveMethodsSumAggregateInput } from './pokemon-move-methods-sum-aggregate.input';
import { PokemonMoveMethodsMinAggregateInput } from './pokemon-move-methods-min-aggregate.input';
import { PokemonMoveMethodsMaxAggregateInput } from './pokemon-move-methods-max-aggregate.input';

@ArgsType()
export class PokemonMoveMethodsAggregateArgs {

    @Field(() => PokemonMoveMethodsWhereInput, {nullable:true})
    @Type(() => PokemonMoveMethodsWhereInput)
    where?: PokemonMoveMethodsWhereInput;

    @Field(() => [PokemonMoveMethodsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonMoveMethodsOrderByWithRelationInput>;

    @Field(() => PokemonMoveMethodsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonMoveMethodsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonMoveMethodsCountAggregateInput, {nullable:true})
    _count?: PokemonMoveMethodsCountAggregateInput;

    @Field(() => PokemonMoveMethodsAvgAggregateInput, {nullable:true})
    _avg?: PokemonMoveMethodsAvgAggregateInput;

    @Field(() => PokemonMoveMethodsSumAggregateInput, {nullable:true})
    _sum?: PokemonMoveMethodsSumAggregateInput;

    @Field(() => PokemonMoveMethodsMinAggregateInput, {nullable:true})
    _min?: PokemonMoveMethodsMinAggregateInput;

    @Field(() => PokemonMoveMethodsMaxAggregateInput, {nullable:true})
    _max?: PokemonMoveMethodsMaxAggregateInput;
}
