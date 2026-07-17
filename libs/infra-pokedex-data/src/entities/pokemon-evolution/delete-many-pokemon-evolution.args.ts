import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonEvolutionWhereInput } from './pokemon-evolution-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPokemonEvolutionArgs {

    @Field(() => PokemonEvolutionWhereInput, {nullable:true})
    @Type(() => PokemonEvolutionWhereInput)
    where?: PokemonEvolutionWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
