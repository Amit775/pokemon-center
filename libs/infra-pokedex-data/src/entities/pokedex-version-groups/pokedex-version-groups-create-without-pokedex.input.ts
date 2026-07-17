import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsCreateNestedOneWithoutPokedexVersionGroupsInput } from '../version-groups/version-groups-create-nested-one-without-pokedex-version-groups.input';

@InputType()
export class PokedexVersionGroupsCreateWithoutPokedexInput {

    @Field(() => VersionGroupsCreateNestedOneWithoutPokedexVersionGroupsInput, {nullable:false})
    versionGroup!: VersionGroupsCreateNestedOneWithoutPokedexVersionGroupsInput;
}
