import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateWithoutDexNumbersInput } from './pokemon-species-create-without-dex-numbers.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutDexNumbersInput } from './pokemon-species-create-or-connect-without-dex-numbers.input';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class PokemonSpeciesCreateNestedOneWithoutDexNumbersInput {

    @Field(() => PokemonSpeciesCreateWithoutDexNumbersInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutDexNumbersInput)
    create?: PokemonSpeciesCreateWithoutDexNumbersInput;

    @Field(() => PokemonSpeciesCreateOrConnectWithoutDexNumbersInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutDexNumbersInput)
    connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutDexNumbersInput;

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;
}
