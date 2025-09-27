import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PokemonFormsCountAggregate } from './pokemon-forms-count-aggregate.output';
import { PokemonFormsAvgAggregate } from './pokemon-forms-avg-aggregate.output';
import { PokemonFormsSumAggregate } from './pokemon-forms-sum-aggregate.output';
import { PokemonFormsMinAggregate } from './pokemon-forms-min-aggregate.output';
import { PokemonFormsMaxAggregate } from './pokemon-forms-max-aggregate.output';

@ObjectType()
export class AggregatePokemonForms {

    @Field(() => PokemonFormsCountAggregate, {nullable:true})
    _count?: PokemonFormsCountAggregate;

    @Field(() => PokemonFormsAvgAggregate, {nullable:true})
    _avg?: PokemonFormsAvgAggregate;

    @Field(() => PokemonFormsSumAggregate, {nullable:true})
    _sum?: PokemonFormsSumAggregate;

    @Field(() => PokemonFormsMinAggregate, {nullable:true})
    _min?: PokemonFormsMinAggregate;

    @Field(() => PokemonFormsMaxAggregate, {nullable:true})
    _max?: PokemonFormsMaxAggregate;
}
