import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokedexesUpdateOneRequiredWithoutVersionGroupsNestedInput } from '../pokedexes/pokedexes-update-one-required-without-version-groups-nested.input';
import { VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput } from '../version-groups/version-groups-update-one-required-without-pokedex-version-groups-nested.input';

@InputType()
export class PokedexVersionGroupsUpdateInput {

    @Field(() => PokedexesUpdateOneRequiredWithoutVersionGroupsNestedInput, {nullable:true})
    pokedex?: Identity<PokedexesUpdateOneRequiredWithoutVersionGroupsNestedInput>;

    @Field(() => VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput, {nullable:true})
    versionGroup?: Identity<VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput>;
}
