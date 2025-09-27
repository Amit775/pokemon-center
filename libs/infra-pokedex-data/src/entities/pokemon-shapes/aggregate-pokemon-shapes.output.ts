import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PokemonShapesCountAggregate } from './pokemon-shapes-count-aggregate.output';
import { PokemonShapesAvgAggregate } from './pokemon-shapes-avg-aggregate.output';
import { PokemonShapesSumAggregate } from './pokemon-shapes-sum-aggregate.output';
import { PokemonShapesMinAggregate } from './pokemon-shapes-min-aggregate.output';
import { PokemonShapesMaxAggregate } from './pokemon-shapes-max-aggregate.output';

@ObjectType()
export class AggregatePokemonShapes {

    @Field(() => PokemonShapesCountAggregate, {nullable:true})
    _count?: PokemonShapesCountAggregate;

    @Field(() => PokemonShapesAvgAggregate, {nullable:true})
    _avg?: PokemonShapesAvgAggregate;

    @Field(() => PokemonShapesSumAggregate, {nullable:true})
    _sum?: PokemonShapesSumAggregate;

    @Field(() => PokemonShapesMinAggregate, {nullable:true})
    _min?: PokemonShapesMinAggregate;

    @Field(() => PokemonShapesMaxAggregate, {nullable:true})
    _max?: PokemonShapesMaxAggregate;
}
