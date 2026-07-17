import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokedexesCreateNestedOneWithoutVersionGroupsInput } from '../pokedexes/pokedexes-create-nested-one-without-version-groups.input';
import { VersionGroupsCreateNestedOneWithoutPokedexVersionGroupsInput } from '../version-groups/version-groups-create-nested-one-without-pokedex-version-groups.input';

@InputType()
export class PokedexVersionGroupsCreateInput {

    @Field(() => PokedexesCreateNestedOneWithoutVersionGroupsInput, {nullable:false})
    pokedex!: Identity<PokedexesCreateNestedOneWithoutVersionGroupsInput>;

    @Field(() => VersionGroupsCreateNestedOneWithoutPokedexVersionGroupsInput, {nullable:false})
    versionGroup!: Identity<VersionGroupsCreateNestedOneWithoutPokedexVersionGroupsInput>;
}
