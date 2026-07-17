import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonMoveMethodsUpdateOneRequiredWithoutVersionGroupsNestedInput } from '../pokemon-move-methods/pokemon-move-methods-update-one-required-without-version-groups-nested.input';

@InputType()
export class VersionGroupPokemonMoveMethodsUpdateWithoutVersionGroupInput {

    @Field(() => PokemonMoveMethodsUpdateOneRequiredWithoutVersionGroupsNestedInput, {nullable:true})
    moveMethod?: PokemonMoveMethodsUpdateOneRequiredWithoutVersionGroupsNestedInput;
}
