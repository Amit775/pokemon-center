import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokedexesCountAggregate } from './pokedexes-count-aggregate.output';
import { PokedexesAvgAggregate } from './pokedexes-avg-aggregate.output';
import { PokedexesSumAggregate } from './pokedexes-sum-aggregate.output';
import { PokedexesMinAggregate } from './pokedexes-min-aggregate.output';
import { PokedexesMaxAggregate } from './pokedexes-max-aggregate.output';

@ObjectType()
export class PokedexesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    region_id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    is_main_series!: number;

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
