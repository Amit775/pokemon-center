import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonHabitatsWhereUniqueInput } from './pokemon-habitats-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePokemonHabitatsArgs {

    @Field(() => PokemonHabitatsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonHabitatsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonHabitatsWhereUniqueInput, 'id'>;
}
