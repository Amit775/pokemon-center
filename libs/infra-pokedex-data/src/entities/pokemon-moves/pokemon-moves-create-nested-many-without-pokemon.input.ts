import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonMovesCreateWithoutPokemonInput } from './pokemon-moves-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { PokemonMovesCreateOrConnectWithoutPokemonInput } from './pokemon-moves-create-or-connect-without-pokemon.input';
import { PokemonMovesCreateManyPokemonInputEnvelope } from './pokemon-moves-create-many-pokemon-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonMovesWhereUniqueInput } from './pokemon-moves-where-unique.input';

@InputType()
export class PokemonMovesCreateNestedManyWithoutPokemonInput {

    @Field(() => [PokemonMovesCreateWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonMovesCreateWithoutPokemonInput)
    create?: Array<PokemonMovesCreateWithoutPokemonInput>;

    @Field(() => [PokemonMovesCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonMovesCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<PokemonMovesCreateOrConnectWithoutPokemonInput>;

    @Field(() => PokemonMovesCreateManyPokemonInputEnvelope, {nullable:true})
    @Type(() => PokemonMovesCreateManyPokemonInputEnvelope)
    createMany?: PokemonMovesCreateManyPokemonInputEnvelope;

    @Field(() => [PokemonMovesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonMovesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonMovesWhereUniqueInput, 'pokemon_id_version_group_id_move_id_pokemon_move_method_id'>>;
}
