import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormGenerationsWhereInput } from './pokemon-form-generations-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPokemonFormGenerationsArgs {

    @Field(() => PokemonFormGenerationsWhereInput, {nullable:true})
    @Type(() => PokemonFormGenerationsWhereInput)
    where?: Identity<PokemonFormGenerationsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
