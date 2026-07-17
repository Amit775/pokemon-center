import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonMovesCreateWithoutMoveInput } from './pokemon-moves-create-without-move.input';
import { Type } from 'class-transformer';
import { PokemonMovesCreateOrConnectWithoutMoveInput } from './pokemon-moves-create-or-connect-without-move.input';
import { PokemonMovesCreateManyMoveInputEnvelope } from './pokemon-moves-create-many-move-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonMovesWhereUniqueInput } from './pokemon-moves-where-unique.input';

@InputType()
export class PokemonMovesCreateNestedManyWithoutMoveInput {

    @Field(() => [PokemonMovesCreateWithoutMoveInput], {nullable:true})
    @Type(() => PokemonMovesCreateWithoutMoveInput)
    create?: Array<PokemonMovesCreateWithoutMoveInput>;

    @Field(() => [PokemonMovesCreateOrConnectWithoutMoveInput], {nullable:true})
    @Type(() => PokemonMovesCreateOrConnectWithoutMoveInput)
    connectOrCreate?: Array<PokemonMovesCreateOrConnectWithoutMoveInput>;

    @Field(() => PokemonMovesCreateManyMoveInputEnvelope, {nullable:true})
    @Type(() => PokemonMovesCreateManyMoveInputEnvelope)
    createMany?: PokemonMovesCreateManyMoveInputEnvelope;

    @Field(() => [PokemonMovesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonMovesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonMovesWhereUniqueInput, 'pokemon_id_version_group_id_move_id_pokemon_move_method_id'>>;
}
