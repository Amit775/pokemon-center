import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonCreateWithoutStatsInput } from './pokemon-create-without-stats.input';

@InputType()
export class PokemonCreateOrConnectWithoutStatsInput {

    @Field(() => PokemonWhereUniqueInput, {nullable:false})
    @Type(() => PokemonWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;

    @Field(() => PokemonCreateWithoutStatsInput, {nullable:false})
    @Type(() => PokemonCreateWithoutStatsInput)
    create!: PokemonCreateWithoutStatsInput;
}
