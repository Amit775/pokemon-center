import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateNestedOneWithoutEggGroupsInput } from '../pokemon-species/pokemon-species-create-nested-one-without-egg-groups.input';
import { EggGroupsCreateNestedOneWithoutSpeciesInput } from '../egg-groups/egg-groups-create-nested-one-without-species.input';

@InputType()
export class PokemonEggGroupsCreateInput {

    @Field(() => PokemonSpeciesCreateNestedOneWithoutEggGroupsInput, {nullable:false})
    species!: Identity<PokemonSpeciesCreateNestedOneWithoutEggGroupsInput>;

    @Field(() => EggGroupsCreateNestedOneWithoutSpeciesInput, {nullable:false})
    eggGroup!: Identity<EggGroupsCreateNestedOneWithoutSpeciesInput>;
}
