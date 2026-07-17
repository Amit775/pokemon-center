import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput } from '../version-groups/version-groups-update-one-required-without-pokedex-version-groups-nested.input';

@InputType()
export class PokedexVersionGroupsUpdateWithoutPokedexInput {

    @Field(() => VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput, {nullable:true})
    versionGroup?: VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput;
}
