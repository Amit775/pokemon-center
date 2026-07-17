import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonHabitatsWhereUniqueInput } from './pokemon-habitats-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonHabitatsCreateWithoutSpeciesInput } from './pokemon-habitats-create-without-species.input';

@InputType()
export class PokemonHabitatsCreateOrConnectWithoutSpeciesInput {

    @Field(() => PokemonHabitatsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonHabitatsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonHabitatsWhereUniqueInput, 'id'>;

    @Field(() => PokemonHabitatsCreateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonHabitatsCreateWithoutSpeciesInput)
    create!: PokemonHabitatsCreateWithoutSpeciesInput;
}
