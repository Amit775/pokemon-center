import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesUpdateWithoutHabitatInput } from './pokemon-species-update-without-habitat.input';
import { PokemonSpeciesCreateWithoutHabitatInput } from './pokemon-species-create-without-habitat.input';

@InputType()
export class PokemonSpeciesUpsertWithWhereUniqueWithoutHabitatInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesUpdateWithoutHabitatInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutHabitatInput)
    update!: PokemonSpeciesUpdateWithoutHabitatInput;

    @Field(() => PokemonSpeciesCreateWithoutHabitatInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutHabitatInput)
    create!: PokemonSpeciesCreateWithoutHabitatInput;
}
