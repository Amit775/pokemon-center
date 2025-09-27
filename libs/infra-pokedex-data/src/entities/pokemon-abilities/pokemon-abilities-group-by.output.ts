import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonAbilitiesCountAggregate } from './pokemon-abilities-count-aggregate.output';
import { PokemonAbilitiesAvgAggregate } from './pokemon-abilities-avg-aggregate.output';
import { PokemonAbilitiesSumAggregate } from './pokemon-abilities-sum-aggregate.output';
import { PokemonAbilitiesMinAggregate } from './pokemon-abilities-min-aggregate.output';
import { PokemonAbilitiesMaxAggregate } from './pokemon-abilities-max-aggregate.output';

@ObjectType()
export class PokemonAbilitiesGroupBy {

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    ability_id!: number;

    @Field(() => Int, {nullable:false})
    is_hidden!: number;

    @Field(() => Int, {nullable:false})
    slot!: number;

    @Field(() => PokemonAbilitiesCountAggregate, {nullable:true})
    _count?: PokemonAbilitiesCountAggregate;

    @Field(() => PokemonAbilitiesAvgAggregate, {nullable:true})
    _avg?: PokemonAbilitiesAvgAggregate;

    @Field(() => PokemonAbilitiesSumAggregate, {nullable:true})
    _sum?: PokemonAbilitiesSumAggregate;

    @Field(() => PokemonAbilitiesMinAggregate, {nullable:true})
    _min?: PokemonAbilitiesMinAggregate;

    @Field(() => PokemonAbilitiesMaxAggregate, {nullable:true})
    _max?: PokemonAbilitiesMaxAggregate;
}
