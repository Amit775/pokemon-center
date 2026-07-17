import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateWithoutEvolutionInput } from './pokemon-species-create-without-evolution.input';

@InputType()
export class PokemonSpeciesCreateOrConnectWithoutEvolutionInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesCreateWithoutEvolutionInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutEvolutionInput)
    create!: Identity<PokemonSpeciesCreateWithoutEvolutionInput>;
}
