import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonFormGenerationsCountAggregate } from './pokemon-form-generations-count-aggregate.output';
import { PokemonFormGenerationsAvgAggregate } from './pokemon-form-generations-avg-aggregate.output';
import { PokemonFormGenerationsSumAggregate } from './pokemon-form-generations-sum-aggregate.output';
import { PokemonFormGenerationsMinAggregate } from './pokemon-form-generations-min-aggregate.output';
import { PokemonFormGenerationsMaxAggregate } from './pokemon-form-generations-max-aggregate.output';

@ObjectType()
export class PokemonFormGenerationsGroupBy {

    @Field(() => Int, {nullable:false})
    pokemon_form_id!: number;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => PokemonFormGenerationsCountAggregate, {nullable:true})
    _count?: PokemonFormGenerationsCountAggregate;

    @Field(() => PokemonFormGenerationsAvgAggregate, {nullable:true})
    _avg?: PokemonFormGenerationsAvgAggregate;

    @Field(() => PokemonFormGenerationsSumAggregate, {nullable:true})
    _sum?: PokemonFormGenerationsSumAggregate;

    @Field(() => PokemonFormGenerationsMinAggregate, {nullable:true})
    _min?: PokemonFormGenerationsMinAggregate;

    @Field(() => PokemonFormGenerationsMaxAggregate, {nullable:true})
    _max?: PokemonFormGenerationsMaxAggregate;
}
