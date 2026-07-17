import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonShapesCountAggregate } from './pokemon-shapes-count-aggregate.output';
import { PokemonShapesAvgAggregate } from './pokemon-shapes-avg-aggregate.output';
import { PokemonShapesSumAggregate } from './pokemon-shapes-sum-aggregate.output';
import { PokemonShapesMinAggregate } from './pokemon-shapes-min-aggregate.output';
import { PokemonShapesMaxAggregate } from './pokemon-shapes-max-aggregate.output';

@ObjectType()
export class PokemonShapesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => PokemonShapesCountAggregate, {nullable:true})
    _count?: Identity<PokemonShapesCountAggregate>;

    @Field(() => PokemonShapesAvgAggregate, {nullable:true})
    _avg?: Identity<PokemonShapesAvgAggregate>;

    @Field(() => PokemonShapesSumAggregate, {nullable:true})
    _sum?: Identity<PokemonShapesSumAggregate>;

    @Field(() => PokemonShapesMinAggregate, {nullable:true})
    _min?: Identity<PokemonShapesMinAggregate>;

    @Field(() => PokemonShapesMaxAggregate, {nullable:true})
    _max?: Identity<PokemonShapesMaxAggregate>;
}
