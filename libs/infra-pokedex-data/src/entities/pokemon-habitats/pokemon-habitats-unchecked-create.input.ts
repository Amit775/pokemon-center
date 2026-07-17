import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonSpeciesUncheckedCreateNestedManyWithoutHabitatInput } from '../pokemon-species/pokemon-species-unchecked-create-nested-many-without-habitat.input';

@InputType()
export class PokemonHabitatsUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => PokemonSpeciesUncheckedCreateNestedManyWithoutHabitatInput, {nullable:true})
    species?: PokemonSpeciesUncheckedCreateNestedManyWithoutHabitatInput;
}
