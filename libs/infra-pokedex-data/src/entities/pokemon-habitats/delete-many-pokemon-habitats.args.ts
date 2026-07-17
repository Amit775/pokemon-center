import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonHabitatsWhereInput } from './pokemon-habitats-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPokemonHabitatsArgs {

    @Field(() => PokemonHabitatsWhereInput, {nullable:true})
    @Type(() => PokemonHabitatsWhereInput)
    where?: PokemonHabitatsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
