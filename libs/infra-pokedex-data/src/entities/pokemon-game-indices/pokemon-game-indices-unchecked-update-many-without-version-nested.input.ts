import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonGameIndicesCreateWithoutVersionInput } from './pokemon-game-indices-create-without-version.input';
import { Type } from 'class-transformer';
import { PokemonGameIndicesCreateOrConnectWithoutVersionInput } from './pokemon-game-indices-create-or-connect-without-version.input';
import { PokemonGameIndicesUpsertWithWhereUniqueWithoutVersionInput } from './pokemon-game-indices-upsert-with-where-unique-without-version.input';
import { PokemonGameIndicesCreateManyVersionInputEnvelope } from './pokemon-game-indices-create-many-version-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonGameIndicesWhereUniqueInput } from './pokemon-game-indices-where-unique.input';
import { PokemonGameIndicesUpdateWithWhereUniqueWithoutVersionInput } from './pokemon-game-indices-update-with-where-unique-without-version.input';
import { PokemonGameIndicesUpdateManyWithWhereWithoutVersionInput } from './pokemon-game-indices-update-many-with-where-without-version.input';
import { PokemonGameIndicesScalarWhereInput } from './pokemon-game-indices-scalar-where.input';

@InputType()
export class PokemonGameIndicesUncheckedUpdateManyWithoutVersionNestedInput {

    @Field(() => [PokemonGameIndicesCreateWithoutVersionInput], {nullable:true})
    @Type(() => PokemonGameIndicesCreateWithoutVersionInput)
    create?: Array<PokemonGameIndicesCreateWithoutVersionInput>;

    @Field(() => [PokemonGameIndicesCreateOrConnectWithoutVersionInput], {nullable:true})
    @Type(() => PokemonGameIndicesCreateOrConnectWithoutVersionInput)
    connectOrCreate?: Array<PokemonGameIndicesCreateOrConnectWithoutVersionInput>;

    @Field(() => [PokemonGameIndicesUpsertWithWhereUniqueWithoutVersionInput], {nullable:true})
    @Type(() => PokemonGameIndicesUpsertWithWhereUniqueWithoutVersionInput)
    upsert?: Array<PokemonGameIndicesUpsertWithWhereUniqueWithoutVersionInput>;

    @Field(() => PokemonGameIndicesCreateManyVersionInputEnvelope, {nullable:true})
    @Type(() => PokemonGameIndicesCreateManyVersionInputEnvelope)
    createMany?: PokemonGameIndicesCreateManyVersionInputEnvelope;

    @Field(() => [PokemonGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonGameIndicesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonGameIndicesWhereUniqueInput, 'pokemon_id_version_id'>>;

    @Field(() => [PokemonGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonGameIndicesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonGameIndicesWhereUniqueInput, 'pokemon_id_version_id'>>;

    @Field(() => [PokemonGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonGameIndicesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonGameIndicesWhereUniqueInput, 'pokemon_id_version_id'>>;

    @Field(() => [PokemonGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonGameIndicesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonGameIndicesWhereUniqueInput, 'pokemon_id_version_id'>>;

    @Field(() => [PokemonGameIndicesUpdateWithWhereUniqueWithoutVersionInput], {nullable:true})
    @Type(() => PokemonGameIndicesUpdateWithWhereUniqueWithoutVersionInput)
    update?: Array<PokemonGameIndicesUpdateWithWhereUniqueWithoutVersionInput>;

    @Field(() => [PokemonGameIndicesUpdateManyWithWhereWithoutVersionInput], {nullable:true})
    @Type(() => PokemonGameIndicesUpdateManyWithWhereWithoutVersionInput)
    updateMany?: Array<PokemonGameIndicesUpdateManyWithWhereWithoutVersionInput>;

    @Field(() => [PokemonGameIndicesScalarWhereInput], {nullable:true})
    @Type(() => PokemonGameIndicesScalarWhereInput)
    deleteMany?: Array<PokemonGameIndicesScalarWhereInput>;
}
