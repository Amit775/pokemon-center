import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonDexNumbersUncheckedCreateNestedManyWithoutPokedexInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-unchecked-create-nested-many-without-pokedex.input';

@InputType()
export class PokedexesUncheckedCreateWithoutVersionGroupsInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    region_id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    is_main_series!: number;

    @Field(() => PokemonDexNumbersUncheckedCreateNestedManyWithoutPokedexInput, {nullable:true})
    dexNumbers?: Identity<PokemonDexNumbersUncheckedCreateNestedManyWithoutPokedexInput>;
}
