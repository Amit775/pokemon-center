import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonDexNumbersCreateWithoutSpeciesInput } from './pokemon-dex-numbers-create-without-species.input';
import { Type } from 'class-transformer';
import { PokemonDexNumbersCreateOrConnectWithoutSpeciesInput } from './pokemon-dex-numbers-create-or-connect-without-species.input';
import { PokemonDexNumbersCreateManySpeciesInputEnvelope } from './pokemon-dex-numbers-create-many-species-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonDexNumbersWhereUniqueInput } from './pokemon-dex-numbers-where-unique.input';

@InputType()
export class PokemonDexNumbersUncheckedCreateNestedManyWithoutSpeciesInput {

    @Field(() => [PokemonDexNumbersCreateWithoutSpeciesInput], {nullable:true})
    @Type(() => PokemonDexNumbersCreateWithoutSpeciesInput)
    create?: Array<PokemonDexNumbersCreateWithoutSpeciesInput>;

    @Field(() => [PokemonDexNumbersCreateOrConnectWithoutSpeciesInput], {nullable:true})
    @Type(() => PokemonDexNumbersCreateOrConnectWithoutSpeciesInput)
    connectOrCreate?: Array<PokemonDexNumbersCreateOrConnectWithoutSpeciesInput>;

    @Field(() => PokemonDexNumbersCreateManySpeciesInputEnvelope, {nullable:true})
    @Type(() => PokemonDexNumbersCreateManySpeciesInputEnvelope)
    createMany?: PokemonDexNumbersCreateManySpeciesInputEnvelope;

    @Field(() => [PokemonDexNumbersWhereUniqueInput], {nullable:true})
    @Type(() => PokemonDexNumbersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonDexNumbersWhereUniqueInput, 'species_id_pokedex_id'>>;
}
