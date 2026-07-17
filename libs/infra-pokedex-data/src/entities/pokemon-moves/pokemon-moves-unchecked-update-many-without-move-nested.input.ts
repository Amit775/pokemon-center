import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonMovesCreateWithoutMoveInput } from './pokemon-moves-create-without-move.input';
import { Type } from 'class-transformer';
import { PokemonMovesCreateOrConnectWithoutMoveInput } from './pokemon-moves-create-or-connect-without-move.input';
import { PokemonMovesUpsertWithWhereUniqueWithoutMoveInput } from './pokemon-moves-upsert-with-where-unique-without-move.input';
import type { Identity } from 'identity-type';
import { PokemonMovesCreateManyMoveInputEnvelope } from './pokemon-moves-create-many-move-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonMovesWhereUniqueInput } from './pokemon-moves-where-unique.input';
import { PokemonMovesUpdateWithWhereUniqueWithoutMoveInput } from './pokemon-moves-update-with-where-unique-without-move.input';
import { PokemonMovesUpdateManyWithWhereWithoutMoveInput } from './pokemon-moves-update-many-with-where-without-move.input';
import { PokemonMovesScalarWhereInput } from './pokemon-moves-scalar-where.input';

@InputType()
export class PokemonMovesUncheckedUpdateManyWithoutMoveNestedInput {

    @Field(() => [PokemonMovesCreateWithoutMoveInput], {nullable:true})
    @Type(() => PokemonMovesCreateWithoutMoveInput)
    create?: Array<PokemonMovesCreateWithoutMoveInput>;

    @Field(() => [PokemonMovesCreateOrConnectWithoutMoveInput], {nullable:true})
    @Type(() => PokemonMovesCreateOrConnectWithoutMoveInput)
    connectOrCreate?: Array<PokemonMovesCreateOrConnectWithoutMoveInput>;

    @Field(() => [PokemonMovesUpsertWithWhereUniqueWithoutMoveInput], {nullable:true})
    @Type(() => PokemonMovesUpsertWithWhereUniqueWithoutMoveInput)
    upsert?: Array<PokemonMovesUpsertWithWhereUniqueWithoutMoveInput>;

    @Field(() => PokemonMovesCreateManyMoveInputEnvelope, {nullable:true})
    @Type(() => PokemonMovesCreateManyMoveInputEnvelope)
    createMany?: Identity<PokemonMovesCreateManyMoveInputEnvelope>;

    @Field(() => [PokemonMovesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonMovesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonMovesWhereUniqueInput, 'pokemon_id_version_group_id_move_id_pokemon_move_method_id'>>;

    @Field(() => [PokemonMovesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonMovesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonMovesWhereUniqueInput, 'pokemon_id_version_group_id_move_id_pokemon_move_method_id'>>;

    @Field(() => [PokemonMovesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonMovesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonMovesWhereUniqueInput, 'pokemon_id_version_group_id_move_id_pokemon_move_method_id'>>;

    @Field(() => [PokemonMovesWhereUniqueInput], {nullable:true})
    @Type(() => PokemonMovesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonMovesWhereUniqueInput, 'pokemon_id_version_group_id_move_id_pokemon_move_method_id'>>;

    @Field(() => [PokemonMovesUpdateWithWhereUniqueWithoutMoveInput], {nullable:true})
    @Type(() => PokemonMovesUpdateWithWhereUniqueWithoutMoveInput)
    update?: Array<PokemonMovesUpdateWithWhereUniqueWithoutMoveInput>;

    @Field(() => [PokemonMovesUpdateManyWithWhereWithoutMoveInput], {nullable:true})
    @Type(() => PokemonMovesUpdateManyWithWhereWithoutMoveInput)
    updateMany?: Array<PokemonMovesUpdateManyWithWhereWithoutMoveInput>;

    @Field(() => [PokemonMovesScalarWhereInput], {nullable:true})
    @Type(() => PokemonMovesScalarWhereInput)
    deleteMany?: Array<PokemonMovesScalarWhereInput>;
}
