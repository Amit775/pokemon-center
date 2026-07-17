import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUpdateOneRequiredWithoutEggGroupsNestedInput } from '../pokemon-species/pokemon-species-update-one-required-without-egg-groups-nested.input';

@InputType()
export class PokemonEggGroupsUpdateWithoutEggGroupInput {

    @Field(() => PokemonSpeciesUpdateOneRequiredWithoutEggGroupsNestedInput, {nullable:true})
    species?: Identity<PokemonSpeciesUpdateOneRequiredWithoutEggGroupsNestedInput>;
}
