import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonDexNumbersCreateNestedManyWithoutPokedexInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-create-nested-many-without-pokedex.input';
import { PokedexVersionGroupsCreateNestedManyWithoutPokedexInput } from '../pokedex-version-groups/pokedex-version-groups-create-nested-many-without-pokedex.input';

@InputType()
export class PokedexesCreateWithoutRegionInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    is_main_series!: number;

    @Field(() => PokemonDexNumbersCreateNestedManyWithoutPokedexInput, {nullable:true})
    dexNumbers?: Identity<PokemonDexNumbersCreateNestedManyWithoutPokedexInput>;

    @Field(() => PokedexVersionGroupsCreateNestedManyWithoutPokedexInput, {nullable:true})
    versionGroups?: Identity<PokedexVersionGroupsCreateNestedManyWithoutPokedexInput>;
}
