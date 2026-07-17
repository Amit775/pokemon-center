import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateWithoutGenerationInput } from './pokemon-species-create-without-generation.input';

@InputType()
export class PokemonSpeciesCreateOrConnectWithoutGenerationInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesCreateWithoutGenerationInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutGenerationInput)
    create!: PokemonSpeciesCreateWithoutGenerationInput;
}
