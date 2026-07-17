import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonMovesWhereInput } from './pokemon-moves-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPokemonMovesArgs {

    @Field(() => PokemonMovesWhereInput, {nullable:true})
    @Type(() => PokemonMovesWhereInput)
    where?: Identity<PokemonMovesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
