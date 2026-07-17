import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonDexNumbersCreateWithoutPokedexInput } from './pokemon-dex-numbers-create-without-pokedex.input';
import { Type } from 'class-transformer';
import { PokemonDexNumbersCreateOrConnectWithoutPokedexInput } from './pokemon-dex-numbers-create-or-connect-without-pokedex.input';
import { PokemonDexNumbersUpsertWithWhereUniqueWithoutPokedexInput } from './pokemon-dex-numbers-upsert-with-where-unique-without-pokedex.input';
import type { Identity } from 'identity-type';
import { PokemonDexNumbersCreateManyPokedexInputEnvelope } from './pokemon-dex-numbers-create-many-pokedex-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonDexNumbersWhereUniqueInput } from './pokemon-dex-numbers-where-unique.input';
import { PokemonDexNumbersUpdateWithWhereUniqueWithoutPokedexInput } from './pokemon-dex-numbers-update-with-where-unique-without-pokedex.input';
import { PokemonDexNumbersUpdateManyWithWhereWithoutPokedexInput } from './pokemon-dex-numbers-update-many-with-where-without-pokedex.input';
import { PokemonDexNumbersScalarWhereInput } from './pokemon-dex-numbers-scalar-where.input';

@InputType()
export class PokemonDexNumbersUpdateManyWithoutPokedexNestedInput {

    @Field(() => [PokemonDexNumbersCreateWithoutPokedexInput], {nullable:true})
    @Type(() => PokemonDexNumbersCreateWithoutPokedexInput)
    create?: Array<PokemonDexNumbersCreateWithoutPokedexInput>;

    @Field(() => [PokemonDexNumbersCreateOrConnectWithoutPokedexInput], {nullable:true})
    @Type(() => PokemonDexNumbersCreateOrConnectWithoutPokedexInput)
    connectOrCreate?: Array<PokemonDexNumbersCreateOrConnectWithoutPokedexInput>;

    @Field(() => [PokemonDexNumbersUpsertWithWhereUniqueWithoutPokedexInput], {nullable:true})
    @Type(() => PokemonDexNumbersUpsertWithWhereUniqueWithoutPokedexInput)
    upsert?: Array<PokemonDexNumbersUpsertWithWhereUniqueWithoutPokedexInput>;

    @Field(() => PokemonDexNumbersCreateManyPokedexInputEnvelope, {nullable:true})
    @Type(() => PokemonDexNumbersCreateManyPokedexInputEnvelope)
    createMany?: Identity<PokemonDexNumbersCreateManyPokedexInputEnvelope>;

    @Field(() => [PokemonDexNumbersWhereUniqueInput], {nullable:true})
    @Type(() => PokemonDexNumbersWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonDexNumbersWhereUniqueInput, 'species_id_pokedex_id'>>;

    @Field(() => [PokemonDexNumbersWhereUniqueInput], {nullable:true})
    @Type(() => PokemonDexNumbersWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonDexNumbersWhereUniqueInput, 'species_id_pokedex_id'>>;

    @Field(() => [PokemonDexNumbersWhereUniqueInput], {nullable:true})
    @Type(() => PokemonDexNumbersWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonDexNumbersWhereUniqueInput, 'species_id_pokedex_id'>>;

    @Field(() => [PokemonDexNumbersWhereUniqueInput], {nullable:true})
    @Type(() => PokemonDexNumbersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonDexNumbersWhereUniqueInput, 'species_id_pokedex_id'>>;

    @Field(() => [PokemonDexNumbersUpdateWithWhereUniqueWithoutPokedexInput], {nullable:true})
    @Type(() => PokemonDexNumbersUpdateWithWhereUniqueWithoutPokedexInput)
    update?: Array<PokemonDexNumbersUpdateWithWhereUniqueWithoutPokedexInput>;

    @Field(() => [PokemonDexNumbersUpdateManyWithWhereWithoutPokedexInput], {nullable:true})
    @Type(() => PokemonDexNumbersUpdateManyWithWhereWithoutPokedexInput)
    updateMany?: Array<PokemonDexNumbersUpdateManyWithWhereWithoutPokedexInput>;

    @Field(() => [PokemonDexNumbersScalarWhereInput], {nullable:true})
    @Type(() => PokemonDexNumbersScalarWhereInput)
    deleteMany?: Array<PokemonDexNumbersScalarWhereInput>;
}
