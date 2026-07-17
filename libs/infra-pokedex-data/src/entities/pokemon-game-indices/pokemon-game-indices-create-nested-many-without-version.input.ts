import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonGameIndicesCreateWithoutVersionInput } from './pokemon-game-indices-create-without-version.input';
import { Type } from 'class-transformer';
import { PokemonGameIndicesCreateOrConnectWithoutVersionInput } from './pokemon-game-indices-create-or-connect-without-version.input';
import { PokemonGameIndicesCreateManyVersionInputEnvelope } from './pokemon-game-indices-create-many-version-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonGameIndicesWhereUniqueInput } from './pokemon-game-indices-where-unique.input';

@InputType()
export class PokemonGameIndicesCreateNestedManyWithoutVersionInput {

    @Field(() => [PokemonGameIndicesCreateWithoutVersionInput], {nullable:true})
    @Type(() => PokemonGameIndicesCreateWithoutVersionInput)
    create?: Array<PokemonGameIndicesCreateWithoutVersionInput>;

    @Field(() => [PokemonGameIndicesCreateOrConnectWithoutVersionInput], {nullable:true})
    @Type(() => PokemonGameIndicesCreateOrConnectWithoutVersionInput)
    connectOrCreate?: Array<PokemonGameIndicesCreateOrConnectWithoutVersionInput>;

    @Field(() => PokemonGameIndicesCreateManyVersionInputEnvelope, {nullable:true})
    @Type(() => PokemonGameIndicesCreateManyVersionInputEnvelope)
    createMany?: PokemonGameIndicesCreateManyVersionInputEnvelope;

    @Field(() => [PokemonGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonGameIndicesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonGameIndicesWhereUniqueInput, 'pokemon_id_version_id'>>;
}
