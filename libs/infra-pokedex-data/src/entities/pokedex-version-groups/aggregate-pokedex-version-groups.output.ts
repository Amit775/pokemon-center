import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PokedexVersionGroupsCountAggregate } from './pokedex-version-groups-count-aggregate.output';
import { PokedexVersionGroupsAvgAggregate } from './pokedex-version-groups-avg-aggregate.output';
import { PokedexVersionGroupsSumAggregate } from './pokedex-version-groups-sum-aggregate.output';
import { PokedexVersionGroupsMinAggregate } from './pokedex-version-groups-min-aggregate.output';
import { PokedexVersionGroupsMaxAggregate } from './pokedex-version-groups-max-aggregate.output';

@ObjectType()
export class AggregatePokedexVersionGroups {

    @Field(() => PokedexVersionGroupsCountAggregate, {nullable:true})
    _count?: PokedexVersionGroupsCountAggregate;

    @Field(() => PokedexVersionGroupsAvgAggregate, {nullable:true})
    _avg?: PokedexVersionGroupsAvgAggregate;

    @Field(() => PokedexVersionGroupsSumAggregate, {nullable:true})
    _sum?: PokedexVersionGroupsSumAggregate;

    @Field(() => PokedexVersionGroupsMinAggregate, {nullable:true})
    _min?: PokedexVersionGroupsMinAggregate;

    @Field(() => PokedexVersionGroupsMaxAggregate, {nullable:true})
    _max?: PokedexVersionGroupsMaxAggregate;
}
