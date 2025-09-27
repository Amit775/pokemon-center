import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonFormsCountAggregate } from './pokemon-forms-count-aggregate.output';
import { PokemonFormsAvgAggregate } from './pokemon-forms-avg-aggregate.output';
import { PokemonFormsSumAggregate } from './pokemon-forms-sum-aggregate.output';
import { PokemonFormsMinAggregate } from './pokemon-forms-min-aggregate.output';
import { PokemonFormsMaxAggregate } from './pokemon-forms-max-aggregate.output';

@ObjectType()
export class PokemonFormsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => String, {nullable:true})
    form_identifier?: string;

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    introduced_in_version_group_id!: number;

    @Field(() => Int, {nullable:false})
    is_default!: number;

    @Field(() => Int, {nullable:false})
    is_battle_only!: number;

    @Field(() => Int, {nullable:false})
    is_mega!: number;

    @Field(() => Int, {nullable:false})
    form_order!: number;

    @Field(() => Int, {nullable:false})
    order!: number;

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
