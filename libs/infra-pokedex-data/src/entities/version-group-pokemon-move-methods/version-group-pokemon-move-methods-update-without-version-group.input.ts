import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonMoveMethodsUpdateOneRequiredWithoutVersionGroupsNestedInput } from '../pokemon-move-methods/pokemon-move-methods-update-one-required-without-version-groups-nested.input';

@InputType()
export class VersionGroupPokemonMoveMethodsUpdateWithoutVersionGroupInput {

    @Field(() => PokemonMoveMethodsUpdateOneRequiredWithoutVersionGroupsNestedInput, {nullable:true})
    moveMethod?: Identity<PokemonMoveMethodsUpdateOneRequiredWithoutVersionGroupsNestedInput>;
}
