import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput } from '../version-groups/version-groups-update-one-required-without-version-group-pokemon-move-methods-nested.input';
import { PokemonMoveMethodsUpdateOneRequiredWithoutVersionGroupsNestedInput } from '../pokemon-move-methods/pokemon-move-methods-update-one-required-without-version-groups-nested.input';

@InputType()
export class VersionGroupPokemonMoveMethodsUpdateInput {

    @Field(() => VersionGroupsUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput, {nullable:true})
    versionGroup?: Identity<VersionGroupsUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput>;

    @Field(() => PokemonMoveMethodsUpdateOneRequiredWithoutVersionGroupsNestedInput, {nullable:true})
    moveMethod?: Identity<PokemonMoveMethodsUpdateOneRequiredWithoutVersionGroupsNestedInput>;
}
