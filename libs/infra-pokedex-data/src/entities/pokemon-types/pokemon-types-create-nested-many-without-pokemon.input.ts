import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonTypesCreateWithoutPokemonInput } from './pokemon-types-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { PokemonTypesCreateOrConnectWithoutPokemonInput } from './pokemon-types-create-or-connect-without-pokemon.input';
import { PokemonTypesCreateManyPokemonInputEnvelope } from './pokemon-types-create-many-pokemon-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonTypesWhereUniqueInput } from './pokemon-types-where-unique.input';

@InputType()
export class PokemonTypesCreateNestedManyWithoutPokemonInput {

    @Field(() => [PokemonTypesCreateWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonTypesCreateWithoutPokemonInput)
    create?: Array<PokemonTypesCreateWithoutPokemonInput>;

    @Field(() => [PokemonTypesCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonTypesCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<PokemonTypesCreateOrConnectWithoutPokemonInput>;

    @Field(() => PokemonTypesCreateManyPokemonInputEnvelope, {nullable:true})
    @Type(() => PokemonTypesCreateManyPokemonInputEnvelope)
    createMany?: PokemonTypesCreateManyPokemonInputEnvelope;

    @Field(() => [PokemonTypesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonTypesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonTypesWhereUniqueInput, 'pokemon_id_type_id'>>;
}
