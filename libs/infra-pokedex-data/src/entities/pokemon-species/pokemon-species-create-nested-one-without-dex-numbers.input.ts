import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateWithoutDexNumbersInput } from './pokemon-species-create-without-dex-numbers.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutDexNumbersInput } from './pokemon-species-create-or-connect-without-dex-numbers.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class PokemonSpeciesCreateNestedOneWithoutDexNumbersInput {

    @Field(() => PokemonSpeciesCreateWithoutDexNumbersInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutDexNumbersInput)
    create?: Identity<PokemonSpeciesCreateWithoutDexNumbersInput>;

    @Field(() => PokemonSpeciesCreateOrConnectWithoutDexNumbersInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutDexNumbersInput)
    connectOrCreate?: Identity<PokemonSpeciesCreateOrConnectWithoutDexNumbersInput>;

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;
}
