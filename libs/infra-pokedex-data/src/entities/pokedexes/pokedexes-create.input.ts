import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RegionsCreateNestedOneWithoutPokedexesInput } from '../regions/regions-create-nested-one-without-pokedexes.input';
import { PokemonDexNumbersCreateNestedManyWithoutPokedexInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-create-nested-many-without-pokedex.input';
import { PokedexVersionGroupsCreateNestedManyWithoutPokedexInput } from '../pokedex-version-groups/pokedex-version-groups-create-nested-many-without-pokedex.input';

@InputType()
export class PokedexesCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    is_main_series!: number;

    @Field(() => RegionsCreateNestedOneWithoutPokedexesInput, {nullable:true})
    region?: RegionsCreateNestedOneWithoutPokedexesInput;

    @Field(() => PokemonDexNumbersCreateNestedManyWithoutPokedexInput, {nullable:true})
    dexNumbers?: PokemonDexNumbersCreateNestedManyWithoutPokedexInput;

    @Field(() => PokedexVersionGroupsCreateNestedManyWithoutPokedexInput, {nullable:true})
    versionGroups?: PokedexVersionGroupsCreateNestedManyWithoutPokedexInput;
}
