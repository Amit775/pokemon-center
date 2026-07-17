import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonMovesCreateWithoutVersionGroupInput } from './pokemon-moves-create-without-version-group.input';
import { Type } from 'class-transformer';
import { PokemonMovesCreateOrConnectWithoutVersionGroupInput } from './pokemon-moves-create-or-connect-without-version-group.input';
import { PokemonMovesCreateManyVersionGroupInputEnvelope } from './pokemon-moves-create-many-version-group-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonMovesWhereUniqueInput } from './pokemon-moves-where-unique.input';

@InputType()
export class PokemonMovesCreateNestedManyWithoutVersionGroupInput {

    @Field(() => [PokemonMovesCreateWithoutVersionGroupInput], {nullable:true})
    @Type(() => PokemonMovesCreateWithoutVersionGroupInput)
    create?: Array<PokemonMovesCreateWithoutVersionGroupInput>;

    @Field(() => [PokemonMovesCreateOrConnectWithoutVersionGroupInput], {nullable:true})
    @Type(() => PokemonMovesCreateOrConnectWithoutVersionGroupInput)
    connectOrCreate?: Array<PokemonMovesCreateOrConnectWithoutVersionGroupInput>;

    @Field(() => PokemonMovesCreateManyVersionGroupInputEnvelope, {nullable:true})
    @Type(() => PokemonMovesCreateManyVersionGroupInputEnvelope)
    createMany?: PokemonMovesCreateManyVersionGroupInputEnvelope;

    @Field(() => [PokemonMovesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonMovesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonMovesWhereUniqueInput, 'pokemon_id_version_group_id_move_id_pokemon_move_method_id'>>;
}
