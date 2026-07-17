import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesUpdateWithoutGenerationInput } from './pokemon-species-update-without-generation.input';
import { PokemonSpeciesCreateWithoutGenerationInput } from './pokemon-species-create-without-generation.input';

@InputType()
export class PokemonSpeciesUpsertWithWhereUniqueWithoutGenerationInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesUpdateWithoutGenerationInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutGenerationInput)
    update!: PokemonSpeciesUpdateWithoutGenerationInput;

    @Field(() => PokemonSpeciesCreateWithoutGenerationInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutGenerationInput)
    create!: PokemonSpeciesCreateWithoutGenerationInput;
}
