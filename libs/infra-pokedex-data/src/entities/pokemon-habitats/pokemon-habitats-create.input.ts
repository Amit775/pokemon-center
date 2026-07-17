import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateNestedManyWithoutHabitatInput } from '../pokemon-species/pokemon-species-create-nested-many-without-habitat.input';

@InputType()
export class PokemonHabitatsCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => PokemonSpeciesCreateNestedManyWithoutHabitatInput, {nullable:true})
    species?: Identity<PokemonSpeciesCreateNestedManyWithoutHabitatInput>;
}
