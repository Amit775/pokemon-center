import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonHabitatsWhereUniqueInput } from './pokemon-habitats-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonHabitatsCreateWithoutSpeciesInput } from './pokemon-habitats-create-without-species.input';

@InputType()
export class PokemonHabitatsCreateOrConnectWithoutSpeciesInput {

    @Field(() => PokemonHabitatsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonHabitatsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonHabitatsWhereUniqueInput, 'id'>;

    @Field(() => PokemonHabitatsCreateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonHabitatsCreateWithoutSpeciesInput)
    create!: Identity<PokemonHabitatsCreateWithoutSpeciesInput>;
}
