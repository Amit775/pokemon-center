import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonStatsCreateWithoutPokemonInput } from './pokemon-stats-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { PokemonStatsCreateOrConnectWithoutPokemonInput } from './pokemon-stats-create-or-connect-without-pokemon.input';
import { PokemonStatsUpsertWithWhereUniqueWithoutPokemonInput } from './pokemon-stats-upsert-with-where-unique-without-pokemon.input';
import type { Identity } from 'identity-type';
import { PokemonStatsCreateManyPokemonInputEnvelope } from './pokemon-stats-create-many-pokemon-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonStatsWhereUniqueInput } from './pokemon-stats-where-unique.input';
import { PokemonStatsUpdateWithWhereUniqueWithoutPokemonInput } from './pokemon-stats-update-with-where-unique-without-pokemon.input';
import { PokemonStatsUpdateManyWithWhereWithoutPokemonInput } from './pokemon-stats-update-many-with-where-without-pokemon.input';
import { PokemonStatsScalarWhereInput } from './pokemon-stats-scalar-where.input';

@InputType()
export class PokemonStatsUncheckedUpdateManyWithoutPokemonNestedInput {

    @Field(() => [PokemonStatsCreateWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonStatsCreateWithoutPokemonInput)
    create?: Array<PokemonStatsCreateWithoutPokemonInput>;

    @Field(() => [PokemonStatsCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonStatsCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<PokemonStatsCreateOrConnectWithoutPokemonInput>;

    @Field(() => [PokemonStatsUpsertWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonStatsUpsertWithWhereUniqueWithoutPokemonInput)
    upsert?: Array<PokemonStatsUpsertWithWhereUniqueWithoutPokemonInput>;

    @Field(() => PokemonStatsCreateManyPokemonInputEnvelope, {nullable:true})
    @Type(() => PokemonStatsCreateManyPokemonInputEnvelope)
    createMany?: Identity<PokemonStatsCreateManyPokemonInputEnvelope>;

    @Field(() => [PokemonStatsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonStatsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonStatsWhereUniqueInput, 'pokemon_id_stat_id'>>;

    @Field(() => [PokemonStatsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonStatsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonStatsWhereUniqueInput, 'pokemon_id_stat_id'>>;

    @Field(() => [PokemonStatsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonStatsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonStatsWhereUniqueInput, 'pokemon_id_stat_id'>>;

    @Field(() => [PokemonStatsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonStatsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonStatsWhereUniqueInput, 'pokemon_id_stat_id'>>;

    @Field(() => [PokemonStatsUpdateWithWhereUniqueWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonStatsUpdateWithWhereUniqueWithoutPokemonInput)
    update?: Array<PokemonStatsUpdateWithWhereUniqueWithoutPokemonInput>;

    @Field(() => [PokemonStatsUpdateManyWithWhereWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonStatsUpdateManyWithWhereWithoutPokemonInput)
    updateMany?: Array<PokemonStatsUpdateManyWithWhereWithoutPokemonInput>;

    @Field(() => [PokemonStatsScalarWhereInput], {nullable:true})
    @Type(() => PokemonStatsScalarWhereInput)
    deleteMany?: Array<PokemonStatsScalarWhereInput>;
}
