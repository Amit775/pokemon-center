import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonStatsCreateWithoutStatInput } from './pokemon-stats-create-without-stat.input';
import { Type } from 'class-transformer';
import { PokemonStatsCreateOrConnectWithoutStatInput } from './pokemon-stats-create-or-connect-without-stat.input';
import { PokemonStatsUpsertWithWhereUniqueWithoutStatInput } from './pokemon-stats-upsert-with-where-unique-without-stat.input';
import { PokemonStatsCreateManyStatInputEnvelope } from './pokemon-stats-create-many-stat-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonStatsWhereUniqueInput } from './pokemon-stats-where-unique.input';
import { PokemonStatsUpdateWithWhereUniqueWithoutStatInput } from './pokemon-stats-update-with-where-unique-without-stat.input';
import { PokemonStatsUpdateManyWithWhereWithoutStatInput } from './pokemon-stats-update-many-with-where-without-stat.input';
import { PokemonStatsScalarWhereInput } from './pokemon-stats-scalar-where.input';

@InputType()
export class PokemonStatsUncheckedUpdateManyWithoutStatNestedInput {

    @Field(() => [PokemonStatsCreateWithoutStatInput], {nullable:true})
    @Type(() => PokemonStatsCreateWithoutStatInput)
    create?: Array<PokemonStatsCreateWithoutStatInput>;

    @Field(() => [PokemonStatsCreateOrConnectWithoutStatInput], {nullable:true})
    @Type(() => PokemonStatsCreateOrConnectWithoutStatInput)
    connectOrCreate?: Array<PokemonStatsCreateOrConnectWithoutStatInput>;

    @Field(() => [PokemonStatsUpsertWithWhereUniqueWithoutStatInput], {nullable:true})
    @Type(() => PokemonStatsUpsertWithWhereUniqueWithoutStatInput)
    upsert?: Array<PokemonStatsUpsertWithWhereUniqueWithoutStatInput>;

    @Field(() => PokemonStatsCreateManyStatInputEnvelope, {nullable:true})
    @Type(() => PokemonStatsCreateManyStatInputEnvelope)
    createMany?: PokemonStatsCreateManyStatInputEnvelope;

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

    @Field(() => [PokemonStatsUpdateWithWhereUniqueWithoutStatInput], {nullable:true})
    @Type(() => PokemonStatsUpdateWithWhereUniqueWithoutStatInput)
    update?: Array<PokemonStatsUpdateWithWhereUniqueWithoutStatInput>;

    @Field(() => [PokemonStatsUpdateManyWithWhereWithoutStatInput], {nullable:true})
    @Type(() => PokemonStatsUpdateManyWithWhereWithoutStatInput)
    updateMany?: Array<PokemonStatsUpdateManyWithWhereWithoutStatInput>;

    @Field(() => [PokemonStatsScalarWhereInput], {nullable:true})
    @Type(() => PokemonStatsScalarWhereInput)
    deleteMany?: Array<PokemonStatsScalarWhereInput>;
}
