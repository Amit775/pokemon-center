import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokedexVersionGroupsUncheckedUpdateManyWithoutPokedexNestedInput } from '../pokedex-version-groups/pokedex-version-groups-unchecked-update-many-without-pokedex-nested.input';

@InputType()
export class PokedexesUncheckedUpdateWithoutDexNumbersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    region_id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    is_main_series?: number;

    @Field(() => PokedexVersionGroupsUncheckedUpdateManyWithoutPokedexNestedInput, {nullable:true})
    versionGroups?: Identity<PokedexVersionGroupsUncheckedUpdateManyWithoutPokedexNestedInput>;
}
