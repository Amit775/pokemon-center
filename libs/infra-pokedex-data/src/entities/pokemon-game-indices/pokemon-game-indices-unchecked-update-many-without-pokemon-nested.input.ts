import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonGameIndicesCreateWithoutPokemonInput } from './pokemon-game-indices-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { PokemonGameIndicesCreateOrConnectWithoutPokemonInput } from './pokemon-game-indices-create-or-connect-without-pokemon.input';
import { PokemonGameIndicesUpsertWithWhereUniqueWithoutPokemonInput } from './pokemon-game-indices-upsert-with-where-unique-without-pokemon.input';
import { PokemonGameIndicesCreateManyPokemonInputEnvelope } from './pokemon-game-indices-create-many-pokemon-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonGameIndicesWhereUniqueInput } from './pokemon-game-indices-where-unique.input';
import { PokemonGameIndicesUpdateWithWhereUniqueWithoutPokemonInput } from './pokemon-game-indices-update-with-where-unique-without-pokemon.input';
import { PokemonGameIndicesUpdateManyWithWhereWithoutPokemonInput } from './pokemon-game-indices-update-many-with-where-without-pokemon.input';
import { PokemonGameIndicesScalarWhereInput } from './pokemon-game-indices-scalar-where.input';

@InputType()
export class PokemonGameIndicesUncheckedUpdateManyWithoutPokemonNestedInput {

    @Field(() => [PokemonGameIndicesCreateWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonGameIndicesCreateWithoutPokemonInput)
    create?: Array<PokemonGameIndicesCreateWithoutPokemonInput>;

    @Field(() => [PokemonGameIndicesCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonGameIndicesCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<PokemonGameIndicesCreateOrConnectWithoutPokemonInput>;

    @Field(() => [PokemonGameIndicesUpsertWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonGameIndicesUpsertWithWhereUniqueWithoutPokemonInput)
    upsert?: Array<PokemonGameIndicesUpsertWithWhereUniqueWithoutPokemonInput>;

    @Field(() => PokemonGameIndicesCreateManyPokemonInputEnvelope, {nullable:true})
    @Type(() => PokemonGameIndicesCreateManyPokemonInputEnvelope)
    createMany?: PokemonGameIndicesCreateManyPokemonInputEnvelope;

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

    @Field(() => [PokemonGameIndicesUpdateWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonGameIndicesUpdateWithWhereUniqueWithoutPokemonInput)
    update?: Array<PokemonGameIndicesUpdateWithWhereUniqueWithoutPokemonInput>;

    @Field(() => [PokemonGameIndicesUpdateManyWithWhereWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonGameIndicesUpdateManyWithWhereWithoutPokemonInput)
    updateMany?: Array<PokemonGameIndicesUpdateManyWithWhereWithoutPokemonInput>;

    @Field(() => [PokemonGameIndicesScalarWhereInput], {nullable:true})
    @Type(() => PokemonGameIndicesScalarWhereInput)
    deleteMany?: Array<PokemonGameIndicesScalarWhereInput>;
}
