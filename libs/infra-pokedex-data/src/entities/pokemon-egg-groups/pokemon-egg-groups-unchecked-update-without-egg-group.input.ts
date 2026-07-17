import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokemonEggGroupsUncheckedUpdateWithoutEggGroupInput {

    @Field(() => Int, {nullable:true})
    species_id?: number;
}
