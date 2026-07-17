import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonMovesCreateWithoutMoveMethodInput } from './pokemon-moves-create-without-move-method.input';
import { Type } from 'class-transformer';
import { PokemonMovesCreateOrConnectWithoutMoveMethodInput } from './pokemon-moves-create-or-connect-without-move-method.input';
import { PokemonMovesUpsertWithWhereUniqueWithoutMoveMethodInput } from './pokemon-moves-upsert-with-where-unique-without-move-method.input';
import type { Identity } from 'identity-type';
import { PokemonMovesCreateManyMoveMethodInputEnvelope } from './pokemon-moves-create-many-move-method-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonMovesWhereUniqueInput } from './pokemon-moves-where-unique.input';
import { PokemonMovesUpdateWithWhereUniqueWithoutMoveMethodInput } from './pokemon-moves-update-with-where-unique-without-move-method.input';
import { PokemonMovesUpdateManyWithWhereWithoutMoveMethodInput } from './pokemon-moves-update-many-with-where-without-move-method.input';
import { PokemonMovesScalarWhereInput } from './pokemon-moves-scalar-where.input';

@InputType()
export class PokemonMovesUpdateManyWithoutMoveMethodNestedInput {

    @Field(() => [PokemonMovesCreateWithoutMoveMethodInput], {nullable:true})
    @Type(() => PokemonMovesCreateWithoutMoveMethodInput)
    create?: Array<PokemonMovesCreateWithoutMoveMethodInput>;

    @Field(() => [PokemonMovesCreateOrConnectWithoutMoveMethodInput], {nullable:true})
    @Type(() => PokemonMovesCreateOrConnectWithoutMoveMethodInput)
    connectOrCreate?: Array<PokemonMovesCreateOrConnectWithoutMoveMethodInput>;

    @Field(() => [PokemonMovesUpsertWithWhereUniqueWithoutMoveMethodInput], {nullable:true})
    @Type(() => PokemonMovesUpsertWithWhereUniqueWithoutMoveMethodInput)
    upsert?: Array<PokemonMovesUpsertWithWhereUniqueWithoutMoveMethodInput>;

    @Field(() => PokemonMovesCreateManyMoveMethodInputEnvelope, {nullable:true})
    @Type(() => PokemonMovesCreateManyMoveMethodInputEnvelope)
    createMany?: Identity<PokemonMovesCreateManyMoveMethodInputEnvelope>;

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

    @Field(() => [PokemonMovesUpdateWithWhereUniqueWithoutMoveMethodInput], {nullable:true})
    @Type(() => PokemonMovesUpdateWithWhereUniqueWithoutMoveMethodInput)
    update?: Array<PokemonMovesUpdateWithWhereUniqueWithoutMoveMethodInput>;

    @Field(() => [PokemonMovesUpdateManyWithWhereWithoutMoveMethodInput], {nullable:true})
    @Type(() => PokemonMovesUpdateManyWithWhereWithoutMoveMethodInput)
    updateMany?: Array<PokemonMovesUpdateManyWithWhereWithoutMoveMethodInput>;

    @Field(() => [PokemonMovesScalarWhereInput], {nullable:true})
    @Type(() => PokemonMovesScalarWhereInput)
    deleteMany?: Array<PokemonMovesScalarWhereInput>;
}
