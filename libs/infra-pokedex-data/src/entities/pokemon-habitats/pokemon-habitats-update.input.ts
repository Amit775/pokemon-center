import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUpdateManyWithoutHabitatNestedInput } from '../pokemon-species/pokemon-species-update-many-without-habitat-nested.input';

@InputType()
export class PokemonHabitatsUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => PokemonSpeciesUpdateManyWithoutHabitatNestedInput, {nullable:true})
    species?: Identity<PokemonSpeciesUpdateManyWithoutHabitatNestedInput>;
}
