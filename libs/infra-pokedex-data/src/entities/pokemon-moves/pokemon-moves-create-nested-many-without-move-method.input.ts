import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonMovesCreateWithoutMoveMethodInput } from './pokemon-moves-create-without-move-method.input';
import { Type } from 'class-transformer';
import { PokemonMovesCreateOrConnectWithoutMoveMethodInput } from './pokemon-moves-create-or-connect-without-move-method.input';
import type { Identity } from 'identity-type';
import { PokemonMovesCreateManyMoveMethodInputEnvelope } from './pokemon-moves-create-many-move-method-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonMovesWhereUniqueInput } from './pokemon-moves-where-unique.input';

@InputType()
export class PokemonMovesCreateNestedManyWithoutMoveMethodInput {

    @Field(() => [PokemonMovesCreateWithoutMoveMethodInput], {nullable:true})
    @Type(() => PokemonMovesCreateWithoutMoveMethodInput)
    create?: Array<PokemonMovesCreateWithoutMoveMethodInput>;

    @Field(() => [PokemonMovesCreateOrConnectWithoutMoveMethodInput], {nullable:true})
    @Type(() => PokemonMovesCreateOrConnectWithoutMoveMethodInput)
    connectOrCreate?: Array<PokemonMovesCreateOrConnectWithoutMoveMethodInput>;

    @Field(() => PokemonMovesCreateManyMoveMethodInputEnvelope, {nullable:true})
    @Type(() => PokemonMovesCreateManyMoveMethodInputEnvelope)
    createMany?: Identity<PokemonMovesCreateManyMoveMethodInputEnvelope>;

    @Field(() => [PokemonMovesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonMovesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonMovesWhereUniqueInput, 'pokemon_id_version_group_id_move_id_pokemon_move_method_id'>>;
}
