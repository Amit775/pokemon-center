import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateWithoutGenerationInput } from './pokemon-species-create-without-generation.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutGenerationInput } from './pokemon-species-create-or-connect-without-generation.input';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateManyGenerationInputEnvelope } from './pokemon-species-create-many-generation-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class PokemonSpeciesUncheckedCreateNestedManyWithoutGenerationInput {

    @Field(() => [PokemonSpeciesCreateWithoutGenerationInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutGenerationInput)
    create?: Array<PokemonSpeciesCreateWithoutGenerationInput>;

    @Field(() => [PokemonSpeciesCreateOrConnectWithoutGenerationInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutGenerationInput)
    connectOrCreate?: Array<PokemonSpeciesCreateOrConnectWithoutGenerationInput>;

    @Field(() => PokemonSpeciesCreateManyGenerationInputEnvelope, {nullable:true})
    @Type(() => PokemonSpeciesCreateManyGenerationInputEnvelope)
    createMany?: Identity<PokemonSpeciesCreateManyGenerationInputEnvelope>;

    @Field(() => [PokemonSpeciesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>>;
}
