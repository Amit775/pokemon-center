import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonDexNumbersWhereInput } from './pokemon-dex-numbers-where.input';

@InputType()
export class PokemonDexNumbersListRelationFilter {

    @Field(() => PokemonDexNumbersWhereInput, {nullable:true})
    every?: Identity<PokemonDexNumbersWhereInput>;

    @Field(() => PokemonDexNumbersWhereInput, {nullable:true})
    some?: Identity<PokemonDexNumbersWhereInput>;

    @Field(() => PokemonDexNumbersWhereInput, {nullable:true})
    none?: Identity<PokemonDexNumbersWhereInput>;
}
