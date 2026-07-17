import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEvolutionWhereInput } from './pokemon-evolution-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPokemonEvolutionArgs {

    @Field(() => PokemonEvolutionWhereInput, {nullable:true})
    @Type(() => PokemonEvolutionWhereInput)
    where?: Identity<PokemonEvolutionWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
