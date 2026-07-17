import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonTypesCreateWithoutPokemonInput } from './pokemon-types-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { PokemonTypesCreateOrConnectWithoutPokemonInput } from './pokemon-types-create-or-connect-without-pokemon.input';
import { PokemonTypesUpsertWithWhereUniqueWithoutPokemonInput } from './pokemon-types-upsert-with-where-unique-without-pokemon.input';
import type { Identity } from 'identity-type';
import { PokemonTypesCreateManyPokemonInputEnvelope } from './pokemon-types-create-many-pokemon-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonTypesWhereUniqueInput } from './pokemon-types-where-unique.input';
import { PokemonTypesUpdateWithWhereUniqueWithoutPokemonInput } from './pokemon-types-update-with-where-unique-without-pokemon.input';
import { PokemonTypesUpdateManyWithWhereWithoutPokemonInput } from './pokemon-types-update-many-with-where-without-pokemon.input';
import { PokemonTypesScalarWhereInput } from './pokemon-types-scalar-where.input';

@InputType()
export class PokemonTypesUncheckedUpdateManyWithoutPokemonNestedInput {

    @Field(() => [PokemonTypesCreateWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonTypesCreateWithoutPokemonInput)
    create?: Array<PokemonTypesCreateWithoutPokemonInput>;

    @Field(() => [PokemonTypesCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonTypesCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<PokemonTypesCreateOrConnectWithoutPokemonInput>;

    @Field(() => [PokemonTypesUpsertWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonTypesUpsertWithWhereUniqueWithoutPokemonInput)
    upsert?: Array<PokemonTypesUpsertWithWhereUniqueWithoutPokemonInput>;

    @Field(() => PokemonTypesCreateManyPokemonInputEnvelope, {nullable:true})
    @Type(() => PokemonTypesCreateManyPokemonInputEnvelope)
    createMany?: Identity<PokemonTypesCreateManyPokemonInputEnvelope>;

    @Field(() => [PokemonTypesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonTypesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonTypesWhereUniqueInput, 'pokemon_id_type_id'>>;

    @Field(() => [PokemonTypesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonTypesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonTypesWhereUniqueInput, 'pokemon_id_type_id'>>;

    @Field(() => [PokemonTypesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonTypesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonTypesWhereUniqueInput, 'pokemon_id_type_id'>>;

    @Field(() => [PokemonTypesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonTypesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonTypesWhereUniqueInput, 'pokemon_id_type_id'>>;

    @Field(() => [PokemonTypesUpdateWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonTypesUpdateWithWhereUniqueWithoutPokemonInput)
    update?: Array<PokemonTypesUpdateWithWhereUniqueWithoutPokemonInput>;

    @Field(() => [PokemonTypesUpdateManyWithWhereWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonTypesUpdateManyWithWhereWithoutPokemonInput)
    updateMany?: Array<PokemonTypesUpdateManyWithWhereWithoutPokemonInput>;

    @Field(() => [PokemonTypesScalarWhereInput], {nullable:true})
    @Type(() => PokemonTypesScalarWhereInput)
    deleteMany?: Array<PokemonTypesScalarWhereInput>;
}
