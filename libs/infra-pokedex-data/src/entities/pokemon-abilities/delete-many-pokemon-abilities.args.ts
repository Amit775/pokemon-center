import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonAbilitiesWhereInput } from './pokemon-abilities-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPokemonAbilitiesArgs {

    @Field(() => PokemonAbilitiesWhereInput, {nullable:true})
    @Type(() => PokemonAbilitiesWhereInput)
    where?: Identity<PokemonAbilitiesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
