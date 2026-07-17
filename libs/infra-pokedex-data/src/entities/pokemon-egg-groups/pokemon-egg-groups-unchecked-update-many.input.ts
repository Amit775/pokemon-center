import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokemonEggGroupsUncheckedUpdateManyInput {

    @Field(() => Int, {nullable:true})
    species_id?: number;

    @Field(() => Int, {nullable:true})
    egg_group_id?: number;
}
