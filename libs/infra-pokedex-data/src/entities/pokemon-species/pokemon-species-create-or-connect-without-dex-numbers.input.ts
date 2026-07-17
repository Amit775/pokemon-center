import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateWithoutDexNumbersInput } from './pokemon-species-create-without-dex-numbers.input';

@InputType()
export class PokemonSpeciesCreateOrConnectWithoutDexNumbersInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesCreateWithoutDexNumbersInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutDexNumbersInput)
    create!: Identity<PokemonSpeciesCreateWithoutDexNumbersInput>;
}
