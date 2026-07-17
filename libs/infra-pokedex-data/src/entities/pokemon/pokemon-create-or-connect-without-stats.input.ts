import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonCreateWithoutStatsInput } from './pokemon-create-without-stats.input';

@InputType()
export class PokemonCreateOrConnectWithoutStatsInput {

    @Field(() => PokemonWhereUniqueInput, {nullable:false})
    @Type(() => PokemonWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;

    @Field(() => PokemonCreateWithoutStatsInput, {nullable:false})
    @Type(() => PokemonCreateWithoutStatsInput)
    create!: Identity<PokemonCreateWithoutStatsInput>;
}
