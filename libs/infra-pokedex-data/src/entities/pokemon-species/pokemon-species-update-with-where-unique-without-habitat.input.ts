import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesUpdateWithoutHabitatInput } from './pokemon-species-update-without-habitat.input';

@InputType()
export class PokemonSpeciesUpdateWithWhereUniqueWithoutHabitatInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesUpdateWithoutHabitatInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutHabitatInput)
    data!: PokemonSpeciesUpdateWithoutHabitatInput;
}
