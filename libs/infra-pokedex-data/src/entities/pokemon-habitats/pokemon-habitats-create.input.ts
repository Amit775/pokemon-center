import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonSpeciesCreateNestedManyWithoutHabitatInput } from '../pokemon-species/pokemon-species-create-nested-many-without-habitat.input';

@InputType()
export class PokemonHabitatsCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => PokemonSpeciesCreateNestedManyWithoutHabitatInput, {nullable:true})
    species?: PokemonSpeciesCreateNestedManyWithoutHabitatInput;
}
