import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PokemonEggGroupsCountAggregate {

    @Field(() => Int, {nullable:false})
    species_id!: number;

    @Field(() => Int, {nullable:false})
    egg_group_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
