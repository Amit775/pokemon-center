import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonGameIndicesCreateWithoutPokemonInput } from './pokemon-game-indices-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { PokemonGameIndicesCreateOrConnectWithoutPokemonInput } from './pokemon-game-indices-create-or-connect-without-pokemon.input';
import { PokemonGameIndicesCreateManyPokemonInputEnvelope } from './pokemon-game-indices-create-many-pokemon-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonGameIndicesWhereUniqueInput } from './pokemon-game-indices-where-unique.input';

@InputType()
export class PokemonGameIndicesUncheckedCreateNestedManyWithoutPokemonInput {

    @Field(() => [PokemonGameIndicesCreateWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonGameIndicesCreateWithoutPokemonInput)
    create?: Array<PokemonGameIndicesCreateWithoutPokemonInput>;

    @Field(() => [PokemonGameIndicesCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonGameIndicesCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<PokemonGameIndicesCreateOrConnectWithoutPokemonInput>;

    @Field(() => PokemonGameIndicesCreateManyPokemonInputEnvelope, {nullable:true})
    @Type(() => PokemonGameIndicesCreateManyPokemonInputEnvelope)
    createMany?: PokemonGameIndicesCreateManyPokemonInputEnvelope;

    @Field(() => [PokemonGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonGameIndicesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonGameIndicesWhereUniqueInput, 'pokemon_id_version_id'>>;
}
