import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateWithoutHabitatInput } from './pokemon-species-create-without-habitat.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutHabitatInput } from './pokemon-species-create-or-connect-without-habitat.input';
import { PokemonSpeciesCreateManyHabitatInputEnvelope } from './pokemon-species-create-many-habitat-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class PokemonSpeciesUncheckedCreateNestedManyWithoutHabitatInput {

    @Field(() => [PokemonSpeciesCreateWithoutHabitatInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutHabitatInput)
    create?: Array<PokemonSpeciesCreateWithoutHabitatInput>;

    @Field(() => [PokemonSpeciesCreateOrConnectWithoutHabitatInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutHabitatInput)
    connectOrCreate?: Array<PokemonSpeciesCreateOrConnectWithoutHabitatInput>;

    @Field(() => PokemonSpeciesCreateManyHabitatInputEnvelope, {nullable:true})
    @Type(() => PokemonSpeciesCreateManyHabitatInputEnvelope)
    createMany?: PokemonSpeciesCreateManyHabitatInputEnvelope;

    @Field(() => [PokemonSpeciesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>>;
}
