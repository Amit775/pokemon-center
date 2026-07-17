import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EggGroupsUpdateOneRequiredWithoutSpeciesNestedInput } from '../egg-groups/egg-groups-update-one-required-without-species-nested.input';

@InputType()
export class PokemonEggGroupsUpdateWithoutSpeciesInput {

    @Field(() => EggGroupsUpdateOneRequiredWithoutSpeciesNestedInput, {nullable:true})
    eggGroup?: EggGroupsUpdateOneRequiredWithoutSpeciesNestedInput;
}
