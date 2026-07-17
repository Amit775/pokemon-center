import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonMovesCreateWithoutVersionGroupInput } from './pokemon-moves-create-without-version-group.input';
import { Type } from 'class-transformer';
import { PokemonMovesCreateOrConnectWithoutVersionGroupInput } from './pokemon-moves-create-or-connect-without-version-group.input';
import { PokemonMovesUpsertWithWhereUniqueWithoutVersionGroupInput } from './pokemon-moves-upsert-with-where-unique-without-version-group.input';
import { PokemonMovesCreateManyVersionGroupInputEnvelope } from './pokemon-moves-create-many-version-group-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonMovesWhereUniqueInput } from './pokemon-moves-where-unique.input';
import { PokemonMovesUpdateWithWhereUniqueWithoutVersionGroupInput } from './pokemon-moves-update-with-where-unique-without-version-group.input';
import { PokemonMovesUpdateManyWithWhereWithoutVersionGroupInput } from './pokemon-moves-update-many-with-where-without-version-group.input';
import { PokemonMovesScalarWhereInput } from './pokemon-moves-scalar-where.input';

@InputType()
export class PokemonMovesUpdateManyWithoutVersionGroupNestedInput {

    @Field(() => [PokemonMovesCreateWithoutVersionGroupInput], {nullable:true})
    @Type(() => PokemonMovesCreateWithoutVersionGroupInput)
    create?: Array<PokemonMovesCreateWithoutVersionGroupInput>;

    @Field(() => [PokemonMovesCreateOrConnectWithoutVersionGroupInput], {nullable:true})
    @Type(() => PokemonMovesCreateOrConnectWithoutVersionGroupInput)
    connectOrCreate?: Array<PokemonMovesCreateOrConnectWithoutVersionGroupInput>;

    @Field(() => [PokemonMovesUpsertWithWhereUniqueWithoutVersionGroupInput], {nullable:true})
    @Type(() => PokemonMovesUpsertWithWhereUniqueWithoutVersionGroupInput)
    upsert?: Array<PokemonMovesUpsertWithWhereUniqueWithoutVersionGroupInput>;

    @Field(() => PokemonMovesCreateManyVersionGroupInputEnvelope, {nullable:true})
    @Type(() => PokemonMovesCreateManyVersionGroupInputEnvelope)
    createMany?: PokemonMovesCreateManyVersionGroupInputEnvelope;

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

    @Field(() => [PokemonMovesUpdateWithWhereUniqueWithoutVersionGroupInput], {nullable:true})
    @Type(() => PokemonMovesUpdateWithWhereUniqueWithoutVersionGroupInput)
    update?: Array<PokemonMovesUpdateWithWhereUniqueWithoutVersionGroupInput>;

    @Field(() => [PokemonMovesUpdateManyWithWhereWithoutVersionGroupInput], {nullable:true})
    @Type(() => PokemonMovesUpdateManyWithWhereWithoutVersionGroupInput)
    updateMany?: Array<PokemonMovesUpdateManyWithWhereWithoutVersionGroupInput>;

    @Field(() => [PokemonMovesScalarWhereInput], {nullable:true})
    @Type(() => PokemonMovesScalarWhereInput)
    deleteMany?: Array<PokemonMovesScalarWhereInput>;
}
