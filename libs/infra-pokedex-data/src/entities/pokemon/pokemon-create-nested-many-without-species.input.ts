import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonCreateWithoutSpeciesInput } from './pokemon-create-without-species.input';
import { Type } from 'class-transformer';
import { PokemonCreateOrConnectWithoutSpeciesInput } from './pokemon-create-or-connect-without-species.input';
import type { Identity } from 'identity-type';
import { PokemonCreateManySpeciesInputEnvelope } from './pokemon-create-many-species-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';

@InputType()
export class PokemonCreateNestedManyWithoutSpeciesInput {

    @Field(() => [PokemonCreateWithoutSpeciesInput], {nullable:true})
    @Type(() => PokemonCreateWithoutSpeciesInput)
    create?: Array<PokemonCreateWithoutSpeciesInput>;

    @Field(() => [PokemonCreateOrConnectWithoutSpeciesInput], {nullable:true})
    @Type(() => PokemonCreateOrConnectWithoutSpeciesInput)
    connectOrCreate?: Array<PokemonCreateOrConnectWithoutSpeciesInput>;

    @Field(() => PokemonCreateManySpeciesInputEnvelope, {nullable:true})
    @Type(() => PokemonCreateManySpeciesInputEnvelope)
    createMany?: Identity<PokemonCreateManySpeciesInputEnvelope>;

    @Field(() => [PokemonWhereUniqueInput], {nullable:true})
    @Type(() => PokemonWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>>;
}
