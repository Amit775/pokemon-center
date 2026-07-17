import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonMoveMethodsCountAggregate } from './pokemon-move-methods-count-aggregate.output';
import { PokemonMoveMethodsAvgAggregate } from './pokemon-move-methods-avg-aggregate.output';
import { PokemonMoveMethodsSumAggregate } from './pokemon-move-methods-sum-aggregate.output';
import { PokemonMoveMethodsMinAggregate } from './pokemon-move-methods-min-aggregate.output';
import { PokemonMoveMethodsMaxAggregate } from './pokemon-move-methods-max-aggregate.output';

@ObjectType()
export class AggregatePokemonMoveMethods {

    @Field(() => PokemonMoveMethodsCountAggregate, {nullable:true})
    _count?: Identity<PokemonMoveMethodsCountAggregate>;

    @Field(() => PokemonMoveMethodsAvgAggregate, {nullable:true})
    _avg?: Identity<PokemonMoveMethodsAvgAggregate>;

    @Field(() => PokemonMoveMethodsSumAggregate, {nullable:true})
    _sum?: Identity<PokemonMoveMethodsSumAggregate>;

    @Field(() => PokemonMoveMethodsMinAggregate, {nullable:true})
    _min?: Identity<PokemonMoveMethodsMinAggregate>;

    @Field(() => PokemonMoveMethodsMaxAggregate, {nullable:true})
    _max?: Identity<PokemonMoveMethodsMaxAggregate>;
}
