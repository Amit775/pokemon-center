import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PokemonEggGroupsAvgAggregate {

    @Field(() => Float, {nullable:true})
    species_id?: number;

    @Field(() => Float, {nullable:true})
    egg_group_id?: number;
}
