import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonMovesCreateWithoutPokemonInput } from './pokemon-moves-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { PokemonMovesCreateOrConnectWithoutPokemonInput } from './pokemon-moves-create-or-connect-without-pokemon.input';
import { PokemonMovesUpsertWithWhereUniqueWithoutPokemonInput } from './pokemon-moves-upsert-with-where-unique-without-pokemon.input';
import { PokemonMovesCreateManyPokemonInputEnvelope } from './pokemon-moves-create-many-pokemon-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonMovesWhereUniqueInput } from './pokemon-moves-where-unique.input';
import { PokemonMovesUpdateWithWhereUniqueWithoutPokemonInput } from './pokemon-moves-update-with-where-unique-without-pokemon.input';
import { PokemonMovesUpdateManyWithWhereWithoutPokemonInput } from './pokemon-moves-update-many-with-where-without-pokemon.input';
import { PokemonMovesScalarWhereInput } from './pokemon-moves-scalar-where.input';

@InputType()
export class PokemonMovesUpdateManyWithoutPokemonNestedInput {

    @Field(() => [PokemonMovesCreateWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonMovesCreateWithoutPokemonInput)
    create?: Array<PokemonMovesCreateWithoutPokemonInput>;

    @Field(() => [PokemonMovesCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonMovesCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<PokemonMovesCreateOrConnectWithoutPokemonInput>;

    @Field(() => [PokemonMovesUpsertWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonMovesUpsertWithWhereUniqueWithoutPokemonInput)
    upsert?: Array<PokemonMovesUpsertWithWhereUniqueWithoutPokemonInput>;

    @Field(() => PokemonMovesCreateManyPokemonInputEnvelope, {nullable:true})
    @Type(() => PokemonMovesCreateManyPokemonInputEnvelope)
    createMany?: PokemonMovesCreateManyPokemonInputEnvelope;

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

    @Field(() => [PokemonMovesUpdateWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonMovesUpdateWithWhereUniqueWithoutPokemonInput)
    update?: Array<PokemonMovesUpdateWithWhereUniqueWithoutPokemonInput>;

    @Field(() => [PokemonMovesUpdateManyWithWhereWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonMovesUpdateManyWithWhereWithoutPokemonInput)
    updateMany?: Array<PokemonMovesUpdateManyWithWhereWithoutPokemonInput>;

    @Field(() => [PokemonMovesScalarWhereInput], {nullable:true})
    @Type(() => PokemonMovesScalarWhereInput)
    deleteMany?: Array<PokemonMovesScalarWhereInput>;
}
