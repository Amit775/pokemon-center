import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonHabitatsCreateWithoutSpeciesInput } from './pokemon-habitats-create-without-species.input';
import { Type } from 'class-transformer';
import { PokemonHabitatsCreateOrConnectWithoutSpeciesInput } from './pokemon-habitats-create-or-connect-without-species.input';
import { PokemonHabitatsUpsertWithoutSpeciesInput } from './pokemon-habitats-upsert-without-species.input';
import { PokemonHabitatsWhereInput } from './pokemon-habitats-where.input';
import { Prisma } from '@prisma/client';
import { PokemonHabitatsWhereUniqueInput } from './pokemon-habitats-where-unique.input';
import { PokemonHabitatsUpdateToOneWithWhereWithoutSpeciesInput } from './pokemon-habitats-update-to-one-with-where-without-species.input';

@InputType()
export class PokemonHabitatsUpdateOneWithoutSpeciesNestedInput {

    @Field(() => PokemonHabitatsCreateWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonHabitatsCreateWithoutSpeciesInput)
    create?: PokemonHabitatsCreateWithoutSpeciesInput;

    @Field(() => PokemonHabitatsCreateOrConnectWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonHabitatsCreateOrConnectWithoutSpeciesInput)
    connectOrCreate?: PokemonHabitatsCreateOrConnectWithoutSpeciesInput;

    @Field(() => PokemonHabitatsUpsertWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonHabitatsUpsertWithoutSpeciesInput)
    upsert?: PokemonHabitatsUpsertWithoutSpeciesInput;

    @Field(() => PokemonHabitatsWhereInput, {nullable:true})
    @Type(() => PokemonHabitatsWhereInput)
    disconnect?: PokemonHabitatsWhereInput;

    @Field(() => PokemonHabitatsWhereInput, {nullable:true})
    @Type(() => PokemonHabitatsWhereInput)
    delete?: PokemonHabitatsWhereInput;

    @Field(() => PokemonHabitatsWhereUniqueInput, {nullable:true})
    @Type(() => PokemonHabitatsWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonHabitatsWhereUniqueInput, 'id'>;

    @Field(() => PokemonHabitatsUpdateToOneWithWhereWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonHabitatsUpdateToOneWithWhereWithoutSpeciesInput)
    update?: PokemonHabitatsUpdateToOneWithWhereWithoutSpeciesInput;
}
