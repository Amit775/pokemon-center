import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonDexNumbersCreateWithoutPokedexInput } from './pokemon-dex-numbers-create-without-pokedex.input';
import { Type } from 'class-transformer';
import { PokemonDexNumbersCreateOrConnectWithoutPokedexInput } from './pokemon-dex-numbers-create-or-connect-without-pokedex.input';
import { PokemonDexNumbersCreateManyPokedexInputEnvelope } from './pokemon-dex-numbers-create-many-pokedex-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonDexNumbersWhereUniqueInput } from './pokemon-dex-numbers-where-unique.input';

@InputType()
export class PokemonDexNumbersUncheckedCreateNestedManyWithoutPokedexInput {

    @Field(() => [PokemonDexNumbersCreateWithoutPokedexInput], {nullable:true})
    @Type(() => PokemonDexNumbersCreateWithoutPokedexInput)
    create?: Array<PokemonDexNumbersCreateWithoutPokedexInput>;

    @Field(() => [PokemonDexNumbersCreateOrConnectWithoutPokedexInput], {nullable:true})
    @Type(() => PokemonDexNumbersCreateOrConnectWithoutPokedexInput)
    connectOrCreate?: Array<PokemonDexNumbersCreateOrConnectWithoutPokedexInput>;

    @Field(() => PokemonDexNumbersCreateManyPokedexInputEnvelope, {nullable:true})
    @Type(() => PokemonDexNumbersCreateManyPokedexInputEnvelope)
    createMany?: PokemonDexNumbersCreateManyPokedexInputEnvelope;

    @Field(() => [PokemonDexNumbersWhereUniqueInput], {nullable:true})
    @Type(() => PokemonDexNumbersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonDexNumbersWhereUniqueInput, 'species_id_pokedex_id'>>;
}
