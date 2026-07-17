import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsCreateNestedOneWithoutPokedexesInput } from '../regions/regions-create-nested-one-without-pokedexes.input';
import { PokedexVersionGroupsCreateNestedManyWithoutPokedexInput } from '../pokedex-version-groups/pokedex-version-groups-create-nested-many-without-pokedex.input';

@InputType()
export class PokedexesCreateWithoutDexNumbersInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    is_main_series!: number;

    @Field(() => RegionsCreateNestedOneWithoutPokedexesInput, {nullable:true})
    region?: Identity<RegionsCreateNestedOneWithoutPokedexesInput>;

    @Field(() => PokedexVersionGroupsCreateNestedManyWithoutPokedexInput, {nullable:true})
    versionGroups?: Identity<PokedexVersionGroupsCreateNestedManyWithoutPokedexInput>;
}
