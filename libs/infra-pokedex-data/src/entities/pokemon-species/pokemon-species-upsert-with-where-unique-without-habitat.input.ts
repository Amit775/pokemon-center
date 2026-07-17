import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUpdateWithoutHabitatInput } from './pokemon-species-update-without-habitat.input';
import { PokemonSpeciesCreateWithoutHabitatInput } from './pokemon-species-create-without-habitat.input';

@InputType()
export class PokemonSpeciesUpsertWithWhereUniqueWithoutHabitatInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesUpdateWithoutHabitatInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutHabitatInput)
    update!: Identity<PokemonSpeciesUpdateWithoutHabitatInput>;

    @Field(() => PokemonSpeciesCreateWithoutHabitatInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutHabitatInput)
    create!: Identity<PokemonSpeciesCreateWithoutHabitatInput>;
}
