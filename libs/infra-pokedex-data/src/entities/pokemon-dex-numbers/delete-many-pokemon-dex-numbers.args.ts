import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonDexNumbersWhereInput } from './pokemon-dex-numbers-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPokemonDexNumbersArgs {

    @Field(() => PokemonDexNumbersWhereInput, {nullable:true})
    @Type(() => PokemonDexNumbersWhereInput)
    where?: PokemonDexNumbersWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
