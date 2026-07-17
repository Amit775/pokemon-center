import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexesCreateNestedOneWithoutVersionGroupsInput } from '../pokedexes/pokedexes-create-nested-one-without-version-groups.input';
import { VersionGroupsCreateNestedOneWithoutPokedexVersionGroupsInput } from '../version-groups/version-groups-create-nested-one-without-pokedex-version-groups.input';

@InputType()
export class PokedexVersionGroupsCreateInput {

    @Field(() => PokedexesCreateNestedOneWithoutVersionGroupsInput, {nullable:false})
    pokedex!: PokedexesCreateNestedOneWithoutVersionGroupsInput;

    @Field(() => VersionGroupsCreateNestedOneWithoutPokedexVersionGroupsInput, {nullable:false})
    versionGroup!: VersionGroupsCreateNestedOneWithoutPokedexVersionGroupsInput;
}
