import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateNestedOneWithoutEggGroupsInput } from '../pokemon-species/pokemon-species-create-nested-one-without-egg-groups.input';

@InputType()
export class PokemonEggGroupsCreateWithoutEggGroupInput {

    @Field(() => PokemonSpeciesCreateNestedOneWithoutEggGroupsInput, {nullable:false})
    species!: PokemonSpeciesCreateNestedOneWithoutEggGroupsInput;
}
