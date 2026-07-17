import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonHabitatsCreateWithoutSpeciesInput } from './pokemon-habitats-create-without-species.input';
import { Type } from 'class-transformer';
import { PokemonHabitatsCreateOrConnectWithoutSpeciesInput } from './pokemon-habitats-create-or-connect-without-species.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonHabitatsWhereUniqueInput } from './pokemon-habitats-where-unique.input';

@InputType()
export class PokemonHabitatsCreateNestedOneWithoutSpeciesInput {

    @Field(() => PokemonHabitatsCreateWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonHabitatsCreateWithoutSpeciesInput)
    create?: Identity<PokemonHabitatsCreateWithoutSpeciesInput>;

    @Field(() => PokemonHabitatsCreateOrConnectWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonHabitatsCreateOrConnectWithoutSpeciesInput)
    connectOrCreate?: Identity<PokemonHabitatsCreateOrConnectWithoutSpeciesInput>;

    @Field(() => PokemonHabitatsWhereUniqueInput, {nullable:true})
    @Type(() => PokemonHabitatsWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonHabitatsWhereUniqueInput, 'id'>;
}
