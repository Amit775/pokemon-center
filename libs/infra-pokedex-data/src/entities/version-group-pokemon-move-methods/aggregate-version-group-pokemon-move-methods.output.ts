import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VersionGroupPokemonMoveMethodsCountAggregate } from './version-group-pokemon-move-methods-count-aggregate.output';
import { VersionGroupPokemonMoveMethodsAvgAggregate } from './version-group-pokemon-move-methods-avg-aggregate.output';
import { VersionGroupPokemonMoveMethodsSumAggregate } from './version-group-pokemon-move-methods-sum-aggregate.output';
import { VersionGroupPokemonMoveMethodsMinAggregate } from './version-group-pokemon-move-methods-min-aggregate.output';
import { VersionGroupPokemonMoveMethodsMaxAggregate } from './version-group-pokemon-move-methods-max-aggregate.output';

@ObjectType()
export class AggregateVersionGroupPokemonMoveMethods {

    @Field(() => VersionGroupPokemonMoveMethodsCountAggregate, {nullable:true})
    _count?: VersionGroupPokemonMoveMethodsCountAggregate;

    @Field(() => VersionGroupPokemonMoveMethodsAvgAggregate, {nullable:true})
    _avg?: VersionGroupPokemonMoveMethodsAvgAggregate;

    @Field(() => VersionGroupPokemonMoveMethodsSumAggregate, {nullable:true})
    _sum?: VersionGroupPokemonMoveMethodsSumAggregate;

    @Field(() => VersionGroupPokemonMoveMethodsMinAggregate, {nullable:true})
    _min?: VersionGroupPokemonMoveMethodsMinAggregate;

    @Field(() => VersionGroupPokemonMoveMethodsMaxAggregate, {nullable:true})
    _max?: VersionGroupPokemonMoveMethodsMaxAggregate;
}
