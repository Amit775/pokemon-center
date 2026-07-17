import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateWithoutPokemonInput } from './pokemon-species-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutPokemonInput } from './pokemon-species-create-or-connect-without-pokemon.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class PokemonSpeciesCreateNestedOneWithoutPokemonInput {

    @Field(() => PokemonSpeciesCreateWithoutPokemonInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutPokemonInput)
    create?: Identity<PokemonSpeciesCreateWithoutPokemonInput>;

    @Field(() => PokemonSpeciesCreateOrConnectWithoutPokemonInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Identity<PokemonSpeciesCreateOrConnectWithoutPokemonInput>;

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;
}
