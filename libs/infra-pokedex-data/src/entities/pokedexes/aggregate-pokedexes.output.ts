import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PokedexesCountAggregate } from './pokedexes-count-aggregate.output';
import { PokedexesAvgAggregate } from './pokedexes-avg-aggregate.output';
import { PokedexesSumAggregate } from './pokedexes-sum-aggregate.output';
import { PokedexesMinAggregate } from './pokedexes-min-aggregate.output';
import { PokedexesMaxAggregate } from './pokedexes-max-aggregate.output';

@ObjectType()
export class AggregatePokedexes {

    @Field(() => PokedexesCountAggregate, {nullable:true})
    _count?: PokedexesCountAggregate;

    @Field(() => PokedexesAvgAggregate, {nullable:true})
    _avg?: PokedexesAvgAggregate;

    @Field(() => PokedexesSumAggregate, {nullable:true})
    _sum?: PokedexesSumAggregate;

    @Field(() => PokedexesMinAggregate, {nullable:true})
    _min?: PokedexesMinAggregate;

    @Field(() => PokedexesMaxAggregate, {nullable:true})
    _max?: PokedexesMaxAggregate;
}
