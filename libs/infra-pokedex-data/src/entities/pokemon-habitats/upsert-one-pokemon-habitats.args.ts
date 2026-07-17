import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonHabitatsWhereUniqueInput } from './pokemon-habitats-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonHabitatsCreateInput } from './pokemon-habitats-create.input';
import { PokemonHabitatsUpdateInput } from './pokemon-habitats-update.input';

@ArgsType()
export class UpsertOnePokemonHabitatsArgs {

    @Field(() => PokemonHabitatsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonHabitatsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonHabitatsWhereUniqueInput, 'id'>;

    @Field(() => PokemonHabitatsCreateInput, {nullable:false})
    @Type(() => PokemonHabitatsCreateInput)
    create!: Identity<PokemonHabitatsCreateInput>;

    @Field(() => PokemonHabitatsUpdateInput, {nullable:false})
    @Type(() => PokemonHabitatsUpdateInput)
    update!: Identity<PokemonHabitatsUpdateInput>;
}
