import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateNestedOneWithoutEggGroupsInput } from '../pokemon-species/pokemon-species-create-nested-one-without-egg-groups.input';
import { EggGroupsCreateNestedOneWithoutSpeciesInput } from '../egg-groups/egg-groups-create-nested-one-without-species.input';

@InputType()
export class PokemonEggGroupsCreateInput {

    @Field(() => PokemonSpeciesCreateNestedOneWithoutEggGroupsInput, {nullable:false})
    species!: PokemonSpeciesCreateNestedOneWithoutEggGroupsInput;

    @Field(() => EggGroupsCreateNestedOneWithoutSpeciesInput, {nullable:false})
    eggGroup!: EggGroupsCreateNestedOneWithoutSpeciesInput;
}
