import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonHabitatsCreateWithoutSpeciesInput } from './pokemon-habitats-create-without-species.input';
import { Type } from 'class-transformer';
import { PokemonHabitatsCreateOrConnectWithoutSpeciesInput } from './pokemon-habitats-create-or-connect-without-species.input';
import { Prisma } from '@prisma/client';
import { PokemonHabitatsWhereUniqueInput } from './pokemon-habitats-where-unique.input';

@InputType()
export class PokemonHabitatsCreateNestedOneWithoutSpeciesInput {

    @Field(() => PokemonHabitatsCreateWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonHabitatsCreateWithoutSpeciesInput)
    create?: PokemonHabitatsCreateWithoutSpeciesInput;

    @Field(() => PokemonHabitatsCreateOrConnectWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonHabitatsCreateOrConnectWithoutSpeciesInput)
    connectOrCreate?: PokemonHabitatsCreateOrConnectWithoutSpeciesInput;

    @Field(() => PokemonHabitatsWhereUniqueInput, {nullable:true})
    @Type(() => PokemonHabitatsWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonHabitatsWhereUniqueInput, 'id'>;
}
