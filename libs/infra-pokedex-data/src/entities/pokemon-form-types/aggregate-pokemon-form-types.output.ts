import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormTypesCountAggregate } from './pokemon-form-types-count-aggregate.output';
import { PokemonFormTypesAvgAggregate } from './pokemon-form-types-avg-aggregate.output';
import { PokemonFormTypesSumAggregate } from './pokemon-form-types-sum-aggregate.output';
import { PokemonFormTypesMinAggregate } from './pokemon-form-types-min-aggregate.output';
import { PokemonFormTypesMaxAggregate } from './pokemon-form-types-max-aggregate.output';

@ObjectType()
export class AggregatePokemonFormTypes {

    @Field(() => PokemonFormTypesCountAggregate, {nullable:true})
    _count?: Identity<PokemonFormTypesCountAggregate>;

    @Field(() => PokemonFormTypesAvgAggregate, {nullable:true})
    _avg?: Identity<PokemonFormTypesAvgAggregate>;

    @Field(() => PokemonFormTypesSumAggregate, {nullable:true})
    _sum?: Identity<PokemonFormTypesSumAggregate>;

    @Field(() => PokemonFormTypesMinAggregate, {nullable:true})
    _min?: Identity<PokemonFormTypesMinAggregate>;

    @Field(() => PokemonFormTypesMaxAggregate, {nullable:true})
    _max?: Identity<PokemonFormTypesMaxAggregate>;
}
