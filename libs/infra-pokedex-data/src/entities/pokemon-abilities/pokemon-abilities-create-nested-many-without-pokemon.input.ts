import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonAbilitiesCreateWithoutPokemonInput } from './pokemon-abilities-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { PokemonAbilitiesCreateOrConnectWithoutPokemonInput } from './pokemon-abilities-create-or-connect-without-pokemon.input';
import { PokemonAbilitiesCreateManyPokemonInputEnvelope } from './pokemon-abilities-create-many-pokemon-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonAbilitiesWhereUniqueInput } from './pokemon-abilities-where-unique.input';

@InputType()
export class PokemonAbilitiesCreateNestedManyWithoutPokemonInput {

    @Field(() => [PokemonAbilitiesCreateWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonAbilitiesCreateWithoutPokemonInput)
    create?: Array<PokemonAbilitiesCreateWithoutPokemonInput>;

    @Field(() => [PokemonAbilitiesCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonAbilitiesCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<PokemonAbilitiesCreateOrConnectWithoutPokemonInput>;

    @Field(() => PokemonAbilitiesCreateManyPokemonInputEnvelope, {nullable:true})
    @Type(() => PokemonAbilitiesCreateManyPokemonInputEnvelope)
    createMany?: PokemonAbilitiesCreateManyPokemonInputEnvelope;

    @Field(() => [PokemonAbilitiesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonAbilitiesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonAbilitiesWhereUniqueInput, 'pokemon_id_ability_id'>>;
}
