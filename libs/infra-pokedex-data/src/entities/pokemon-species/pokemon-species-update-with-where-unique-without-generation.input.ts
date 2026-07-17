import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesUpdateWithoutGenerationInput } from './pokemon-species-update-without-generation.input';

@InputType()
export class PokemonSpeciesUpdateWithWhereUniqueWithoutGenerationInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesUpdateWithoutGenerationInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutGenerationInput)
    data!: PokemonSpeciesUpdateWithoutGenerationInput;
}
