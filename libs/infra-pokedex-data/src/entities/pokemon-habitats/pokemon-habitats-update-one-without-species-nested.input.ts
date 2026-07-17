import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonHabitatsCreateWithoutSpeciesInput } from './pokemon-habitats-create-without-species.input';
import { Type } from 'class-transformer';
import { PokemonHabitatsCreateOrConnectWithoutSpeciesInput } from './pokemon-habitats-create-or-connect-without-species.input';
import { PokemonHabitatsUpsertWithoutSpeciesInput } from './pokemon-habitats-upsert-without-species.input';
import { PokemonHabitatsWhereInput } from './pokemon-habitats-where.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonHabitatsWhereUniqueInput } from './pokemon-habitats-where-unique.input';
import { PokemonHabitatsUpdateToOneWithWhereWithoutSpeciesInput } from './pokemon-habitats-update-to-one-with-where-without-species.input';

@InputType()
export class PokemonHabitatsUpdateOneWithoutSpeciesNestedInput {

    @Field(() => PokemonHabitatsCreateWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonHabitatsCreateWithoutSpeciesInput)
    create?: Identity<PokemonHabitatsCreateWithoutSpeciesInput>;

    @Field(() => PokemonHabitatsCreateOrConnectWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonHabitatsCreateOrConnectWithoutSpeciesInput)
    connectOrCreate?: Identity<PokemonHabitatsCreateOrConnectWithoutSpeciesInput>;

    @Field(() => PokemonHabitatsUpsertWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonHabitatsUpsertWithoutSpeciesInput)
    upsert?: Identity<PokemonHabitatsUpsertWithoutSpeciesInput>;

    @Field(() => PokemonHabitatsWhereInput, {nullable:true})
    @Type(() => PokemonHabitatsWhereInput)
    disconnect?: Identity<PokemonHabitatsWhereInput>;

    @Field(() => PokemonHabitatsWhereInput, {nullable:true})
    @Type(() => PokemonHabitatsWhereInput)
    delete?: Identity<PokemonHabitatsWhereInput>;

    @Field(() => PokemonHabitatsWhereUniqueInput, {nullable:true})
    @Type(() => PokemonHabitatsWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonHabitatsWhereUniqueInput, 'id'>;

    @Field(() => PokemonHabitatsUpdateToOneWithWhereWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonHabitatsUpdateToOneWithWhereWithoutSpeciesInput)
    update?: Identity<PokemonHabitatsUpdateToOneWithWhereWithoutSpeciesInput>;
}
