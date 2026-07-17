import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateWithoutDexNumbersInput } from './pokemon-species-create-without-dex-numbers.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutDexNumbersInput } from './pokemon-species-create-or-connect-without-dex-numbers.input';
import { PokemonSpeciesUpsertWithoutDexNumbersInput } from './pokemon-species-upsert-without-dex-numbers.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { PokemonSpeciesUpdateToOneWithWhereWithoutDexNumbersInput } from './pokemon-species-update-to-one-with-where-without-dex-numbers.input';

@InputType()
export class PokemonSpeciesUpdateOneRequiredWithoutDexNumbersNestedInput {

    @Field(() => PokemonSpeciesCreateWithoutDexNumbersInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutDexNumbersInput)
    create?: Identity<PokemonSpeciesCreateWithoutDexNumbersInput>;

    @Field(() => PokemonSpeciesCreateOrConnectWithoutDexNumbersInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutDexNumbersInput)
    connectOrCreate?: Identity<PokemonSpeciesCreateOrConnectWithoutDexNumbersInput>;

    @Field(() => PokemonSpeciesUpsertWithoutDexNumbersInput, {nullable:true})
    @Type(() => PokemonSpeciesUpsertWithoutDexNumbersInput)
    upsert?: Identity<PokemonSpeciesUpsertWithoutDexNumbersInput>;

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesUpdateToOneWithWhereWithoutDexNumbersInput, {nullable:true})
    @Type(() => PokemonSpeciesUpdateToOneWithWhereWithoutDexNumbersInput)
    update?: Identity<PokemonSpeciesUpdateToOneWithWhereWithoutDexNumbersInput>;
}
