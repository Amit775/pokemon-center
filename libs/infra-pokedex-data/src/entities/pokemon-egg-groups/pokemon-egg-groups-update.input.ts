import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesUpdateOneRequiredWithoutEggGroupsNestedInput } from '../pokemon-species/pokemon-species-update-one-required-without-egg-groups-nested.input';
import { EggGroupsUpdateOneRequiredWithoutSpeciesNestedInput } from '../egg-groups/egg-groups-update-one-required-without-species-nested.input';

@InputType()
export class PokemonEggGroupsUpdateInput {

    @Field(() => PokemonSpeciesUpdateOneRequiredWithoutEggGroupsNestedInput, {nullable:true})
    species?: PokemonSpeciesUpdateOneRequiredWithoutEggGroupsNestedInput;

    @Field(() => EggGroupsUpdateOneRequiredWithoutSpeciesNestedInput, {nullable:true})
    eggGroup?: EggGroupsUpdateOneRequiredWithoutSpeciesNestedInput;
}
