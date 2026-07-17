import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonGameIndicesWhereInput } from './pokemon-game-indices-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPokemonGameIndicesArgs {

    @Field(() => PokemonGameIndicesWhereInput, {nullable:true})
    @Type(() => PokemonGameIndicesWhereInput)
    where?: PokemonGameIndicesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
