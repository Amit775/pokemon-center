import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonItemsWhereInput } from './pokemon-items-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPokemonItemsArgs {

    @Field(() => PokemonItemsWhereInput, {nullable:true})
    @Type(() => PokemonItemsWhereInput)
    where?: Identity<PokemonItemsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
