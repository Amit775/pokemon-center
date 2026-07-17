import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUpdateWithoutEvolvesFromInput } from './pokemon-species-update-without-evolves-from.input';
import { PokemonSpeciesCreateWithoutEvolvesFromInput } from './pokemon-species-create-without-evolves-from.input';

@InputType()
export class PokemonSpeciesUpsertWithWhereUniqueWithoutEvolvesFromInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesUpdateWithoutEvolvesFromInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutEvolvesFromInput)
    update!: Identity<PokemonSpeciesUpdateWithoutEvolvesFromInput>;

    @Field(() => PokemonSpeciesCreateWithoutEvolvesFromInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutEvolvesFromInput)
    create!: Identity<PokemonSpeciesCreateWithoutEvolvesFromInput>;
}
