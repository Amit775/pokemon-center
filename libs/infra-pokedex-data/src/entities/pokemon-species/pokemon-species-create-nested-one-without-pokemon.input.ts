import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateWithoutPokemonInput } from './pokemon-species-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutPokemonInput } from './pokemon-species-create-or-connect-without-pokemon.input';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class PokemonSpeciesCreateNestedOneWithoutPokemonInput {

    @Field(() => PokemonSpeciesCreateWithoutPokemonInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutPokemonInput)
    create?: PokemonSpeciesCreateWithoutPokemonInput;

    @Field(() => PokemonSpeciesCreateOrConnectWithoutPokemonInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutPokemonInput;

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;
}
