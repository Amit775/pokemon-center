import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonDexNumbersCreateWithoutSpeciesInput } from './pokemon-dex-numbers-create-without-species.input';
import { Type } from 'class-transformer';
import { PokemonDexNumbersCreateOrConnectWithoutSpeciesInput } from './pokemon-dex-numbers-create-or-connect-without-species.input';
import { PokemonDexNumbersUpsertWithWhereUniqueWithoutSpeciesInput } from './pokemon-dex-numbers-upsert-with-where-unique-without-species.input';
import { PokemonDexNumbersCreateManySpeciesInputEnvelope } from './pokemon-dex-numbers-create-many-species-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonDexNumbersWhereUniqueInput } from './pokemon-dex-numbers-where-unique.input';
import { PokemonDexNumbersUpdateWithWhereUniqueWithoutSpeciesInput } from './pokemon-dex-numbers-update-with-where-unique-without-species.input';
import { PokemonDexNumbersUpdateManyWithWhereWithoutSpeciesInput } from './pokemon-dex-numbers-update-many-with-where-without-species.input';
import { PokemonDexNumbersScalarWhereInput } from './pokemon-dex-numbers-scalar-where.input';

@InputType()
export class PokemonDexNumbersUpdateManyWithoutSpeciesNestedInput {

    @Field(() => [PokemonDexNumbersCreateWithoutSpeciesInput], {nullable:true})
    @Type(() => PokemonDexNumbersCreateWithoutSpeciesInput)
    create?: Array<PokemonDexNumbersCreateWithoutSpeciesInput>;

    @Field(() => [PokemonDexNumbersCreateOrConnectWithoutSpeciesInput], {nullable:true})
    @Type(() => PokemonDexNumbersCreateOrConnectWithoutSpeciesInput)
    connectOrCreate?: Array<PokemonDexNumbersCreateOrConnectWithoutSpeciesInput>;

    @Field(() => [PokemonDexNumbersUpsertWithWhereUniqueWithoutSpeciesInput], {nullable:true})
    @Type(() => PokemonDexNumbersUpsertWithWhereUniqueWithoutSpeciesInput)
    upsert?: Array<PokemonDexNumbersUpsertWithWhereUniqueWithoutSpeciesInput>;

    @Field(() => PokemonDexNumbersCreateManySpeciesInputEnvelope, {nullable:true})
    @Type(() => PokemonDexNumbersCreateManySpeciesInputEnvelope)
    createMany?: PokemonDexNumbersCreateManySpeciesInputEnvelope;

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

    @Field(() => [PokemonDexNumbersUpdateWithWhereUniqueWithoutSpeciesInput], {nullable:true})
    @Type(() => PokemonDexNumbersUpdateWithWhereUniqueWithoutSpeciesInput)
    update?: Array<PokemonDexNumbersUpdateWithWhereUniqueWithoutSpeciesInput>;

    @Field(() => [PokemonDexNumbersUpdateManyWithWhereWithoutSpeciesInput], {nullable:true})
    @Type(() => PokemonDexNumbersUpdateManyWithWhereWithoutSpeciesInput)
    updateMany?: Array<PokemonDexNumbersUpdateManyWithWhereWithoutSpeciesInput>;

    @Field(() => [PokemonDexNumbersScalarWhereInput], {nullable:true})
    @Type(() => PokemonDexNumbersScalarWhereInput)
    deleteMany?: Array<PokemonDexNumbersScalarWhereInput>;
}
