import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonDexNumbersUpdateManyWithoutPokedexNestedInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-update-many-without-pokedex-nested.input';
import { PokedexVersionGroupsUpdateManyWithoutPokedexNestedInput } from '../pokedex-version-groups/pokedex-version-groups-update-many-without-pokedex-nested.input';

@InputType()
export class PokedexesUpdateWithoutRegionInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    is_main_series?: number;

    @Field(() => PokemonDexNumbersUpdateManyWithoutPokedexNestedInput, {nullable:true})
    dexNumbers?: Identity<PokemonDexNumbersUpdateManyWithoutPokedexNestedInput>;

    @Field(() => PokedexVersionGroupsUpdateManyWithoutPokedexNestedInput, {nullable:true})
    versionGroups?: Identity<PokedexVersionGroupsUpdateManyWithoutPokedexNestedInput>;
}
