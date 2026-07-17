import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateWithoutColorInput } from './pokemon-species-create-without-color.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutColorInput } from './pokemon-species-create-or-connect-without-color.input';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateManyColorInputEnvelope } from './pokemon-species-create-many-color-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class PokemonSpeciesUncheckedCreateNestedManyWithoutColorInput {

    @Field(() => [PokemonSpeciesCreateWithoutColorInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutColorInput)
    create?: Array<PokemonSpeciesCreateWithoutColorInput>;

    @Field(() => [PokemonSpeciesCreateOrConnectWithoutColorInput], {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutColorInput)
    connectOrCreate?: Array<PokemonSpeciesCreateOrConnectWithoutColorInput>;

    @Field(() => PokemonSpeciesCreateManyColorInputEnvelope, {nullable:true})
    @Type(() => PokemonSpeciesCreateManyColorInputEnvelope)
    createMany?: Identity<PokemonSpeciesCreateManyColorInputEnvelope>;

    @Field(() => [PokemonSpeciesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>>;
}
