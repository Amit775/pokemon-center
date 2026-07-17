import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput } from '../version-groups/version-groups-update-one-required-without-pokedex-version-groups-nested.input';

@InputType()
export class PokedexVersionGroupsUpdateWithoutPokedexInput {

    @Field(() => VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput, {nullable:true})
    versionGroup?: Identity<VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput>;
}
