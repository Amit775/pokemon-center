import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateWithoutPokemonInput } from './pokemon-species-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutPokemonInput } from './pokemon-species-create-or-connect-without-pokemon.input';
import { PokemonSpeciesUpsertWithoutPokemonInput } from './pokemon-species-upsert-without-pokemon.input';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { PokemonSpeciesUpdateToOneWithWhereWithoutPokemonInput } from './pokemon-species-update-to-one-with-where-without-pokemon.input';

@InputType()
export class PokemonSpeciesUpdateOneRequiredWithoutPokemonNestedInput {

    @Field(() => PokemonSpeciesCreateWithoutPokemonInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutPokemonInput)
    create?: PokemonSpeciesCreateWithoutPokemonInput;

    @Field(() => PokemonSpeciesCreateOrConnectWithoutPokemonInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutPokemonInput;

    @Field(() => PokemonSpeciesUpsertWithoutPokemonInput, {nullable:true})
    @Type(() => PokemonSpeciesUpsertWithoutPokemonInput)
    upsert?: PokemonSpeciesUpsertWithoutPokemonInput;

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesUpdateToOneWithWhereWithoutPokemonInput, {nullable:true})
    @Type(() => PokemonSpeciesUpdateToOneWithWhereWithoutPokemonInput)
    update?: PokemonSpeciesUpdateToOneWithWhereWithoutPokemonInput;
}
