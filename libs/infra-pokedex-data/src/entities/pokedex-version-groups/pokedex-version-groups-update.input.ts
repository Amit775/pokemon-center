import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexesUpdateOneRequiredWithoutVersionGroupsNestedInput } from '../pokedexes/pokedexes-update-one-required-without-version-groups-nested.input';
import { VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput } from '../version-groups/version-groups-update-one-required-without-pokedex-version-groups-nested.input';

@InputType()
export class PokedexVersionGroupsUpdateInput {

    @Field(() => PokedexesUpdateOneRequiredWithoutVersionGroupsNestedInput, {nullable:true})
    pokedex?: PokedexesUpdateOneRequiredWithoutVersionGroupsNestedInput;

    @Field(() => VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput, {nullable:true})
    versionGroup?: VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput;
}
