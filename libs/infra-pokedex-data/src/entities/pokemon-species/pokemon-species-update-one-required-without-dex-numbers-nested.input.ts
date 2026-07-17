import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateWithoutDexNumbersInput } from './pokemon-species-create-without-dex-numbers.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutDexNumbersInput } from './pokemon-species-create-or-connect-without-dex-numbers.input';
import { PokemonSpeciesUpsertWithoutDexNumbersInput } from './pokemon-species-upsert-without-dex-numbers.input';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { PokemonSpeciesUpdateToOneWithWhereWithoutDexNumbersInput } from './pokemon-species-update-to-one-with-where-without-dex-numbers.input';

@InputType()
export class PokemonSpeciesUpdateOneRequiredWithoutDexNumbersNestedInput {

    @Field(() => PokemonSpeciesCreateWithoutDexNumbersInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutDexNumbersInput)
    create?: PokemonSpeciesCreateWithoutDexNumbersInput;

    @Field(() => PokemonSpeciesCreateOrConnectWithoutDexNumbersInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutDexNumbersInput)
    connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutDexNumbersInput;

    @Field(() => PokemonSpeciesUpsertWithoutDexNumbersInput, {nullable:true})
    @Type(() => PokemonSpeciesUpsertWithoutDexNumbersInput)
    upsert?: PokemonSpeciesUpsertWithoutDexNumbersInput;

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesUpdateToOneWithWhereWithoutDexNumbersInput, {nullable:true})
    @Type(() => PokemonSpeciesUpdateToOneWithWhereWithoutDexNumbersInput)
    update?: PokemonSpeciesUpdateToOneWithWhereWithoutDexNumbersInput;
}
