import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUncheckedUpdateManyWithoutHabitatNestedInput } from '../pokemon-species/pokemon-species-unchecked-update-many-without-habitat-nested.input';

@InputType()
export class PokemonHabitatsUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => PokemonSpeciesUncheckedUpdateManyWithoutHabitatNestedInput, {nullable:true})
    species?: Identity<PokemonSpeciesUncheckedUpdateManyWithoutHabitatNestedInput>;
}
