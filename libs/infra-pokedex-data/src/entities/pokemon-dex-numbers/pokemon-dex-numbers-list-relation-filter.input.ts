import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonDexNumbersWhereInput } from './pokemon-dex-numbers-where.input';

@InputType()
export class PokemonDexNumbersListRelationFilter {

    @Field(() => PokemonDexNumbersWhereInput, {nullable:true})
    every?: PokemonDexNumbersWhereInput;

    @Field(() => PokemonDexNumbersWhereInput, {nullable:true})
    some?: PokemonDexNumbersWhereInput;

    @Field(() => PokemonDexNumbersWhereInput, {nullable:true})
    none?: PokemonDexNumbersWhereInput;
}
