import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonMoveMethodsCountAggregate } from './pokemon-move-methods-count-aggregate.output';
import { PokemonMoveMethodsAvgAggregate } from './pokemon-move-methods-avg-aggregate.output';
import { PokemonMoveMethodsSumAggregate } from './pokemon-move-methods-sum-aggregate.output';
import { PokemonMoveMethodsMinAggregate } from './pokemon-move-methods-min-aggregate.output';
import { PokemonMoveMethodsMaxAggregate } from './pokemon-move-methods-max-aggregate.output';

@ObjectType()
export class PokemonMoveMethodsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => PokemonMoveMethodsCountAggregate, {nullable:true})
    _count?: PokemonMoveMethodsCountAggregate;

    @Field(() => PokemonMoveMethodsAvgAggregate, {nullable:true})
    _avg?: PokemonMoveMethodsAvgAggregate;

    @Field(() => PokemonMoveMethodsSumAggregate, {nullable:true})
    _sum?: PokemonMoveMethodsSumAggregate;

    @Field(() => PokemonMoveMethodsMinAggregate, {nullable:true})
    _min?: PokemonMoveMethodsMinAggregate;

    @Field(() => PokemonMoveMethodsMaxAggregate, {nullable:true})
    _max?: PokemonMoveMethodsMaxAggregate;
}
