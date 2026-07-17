import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateWithoutHabitatInput } from './pokemon-species-create-without-habitat.input';

@InputType()
export class PokemonSpeciesCreateOrConnectWithoutHabitatInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesCreateWithoutHabitatInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutHabitatInput)
    create!: PokemonSpeciesCreateWithoutHabitatInput;
}
