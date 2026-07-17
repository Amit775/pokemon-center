import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonHabitatsUpdateInput } from './pokemon-habitats-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonHabitatsWhereUniqueInput } from './pokemon-habitats-where-unique.input';

@ArgsType()
export class UpdateOnePokemonHabitatsArgs {

    @Field(() => PokemonHabitatsUpdateInput, {nullable:false})
    @Type(() => PokemonHabitatsUpdateInput)
    data!: Identity<PokemonHabitatsUpdateInput>;

    @Field(() => PokemonHabitatsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonHabitatsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonHabitatsWhereUniqueInput, 'id'>;
}
