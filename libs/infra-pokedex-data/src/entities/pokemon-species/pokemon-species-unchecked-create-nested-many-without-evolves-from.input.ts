import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateWithoutEvolvesFromInput } from './pokemon-species-create-without-evolves-from.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutEvolvesFromInput } from './pokemon-species-create-or-connect-without-evolves-from.input';
import { PokemonSpeciesCreateManyEvolvesFromInputEnvelope } from './pokemon-species-create-many-evolves-from-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class PokemonSpeciesUncheckedCreateNestedManyWithoutEvolvesFromInput {

    @Field(() => [PokemonSpeciesCreateWithoutEvolvesFromInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutEvolvesFromInput)
    create?: Array<PokemonSpeciesCreateWithoutEvolvesFromInput>;

    @Field(() => [PokemonSpeciesCreateOrConnectWithoutEvolvesFromInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutEvolvesFromInput)
    connectOrCreate?: Array<PokemonSpeciesCreateOrConnectWithoutEvolvesFromInput>;

    @Field(() => PokemonSpeciesCreateManyEvolvesFromInputEnvelope, {nullable:true})
    @Type(() => PokemonSpeciesCreateManyEvolvesFromInputEnvelope)
    createMany?: PokemonSpeciesCreateManyEvolvesFromInputEnvelope;

    @Field(() => [PokemonSpeciesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>>;
}
