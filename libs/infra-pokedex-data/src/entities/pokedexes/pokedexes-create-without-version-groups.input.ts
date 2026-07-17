import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsCreateNestedOneWithoutPokedexesInput } from '../regions/regions-create-nested-one-without-pokedexes.input';
import { PokemonDexNumbersCreateNestedManyWithoutPokedexInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-create-nested-many-without-pokedex.input';

@InputType()
export class PokedexesCreateWithoutVersionGroupsInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    is_main_series!: number;

    @Field(() => RegionsCreateNestedOneWithoutPokedexesInput, {nullable:true})
    region?: Identity<RegionsCreateNestedOneWithoutPokedexesInput>;

    @Field(() => PokemonDexNumbersCreateNestedManyWithoutPokedexInput, {nullable:true})
    dexNumbers?: Identity<PokemonDexNumbersCreateNestedManyWithoutPokedexInput>;
}
