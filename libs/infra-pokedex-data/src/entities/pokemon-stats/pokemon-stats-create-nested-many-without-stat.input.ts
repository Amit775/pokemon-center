import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonStatsCreateWithoutStatInput } from './pokemon-stats-create-without-stat.input';
import { Type } from 'class-transformer';
import { PokemonStatsCreateOrConnectWithoutStatInput } from './pokemon-stats-create-or-connect-without-stat.input';
import type { Identity } from 'identity-type';
import { PokemonStatsCreateManyStatInputEnvelope } from './pokemon-stats-create-many-stat-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonStatsWhereUniqueInput } from './pokemon-stats-where-unique.input';

@InputType()
export class PokemonStatsCreateNestedManyWithoutStatInput {

    @Field(() => [PokemonStatsCreateWithoutStatInput], {nullable:true})
    @Type(() => PokemonStatsCreateWithoutStatInput)
    create?: Array<PokemonStatsCreateWithoutStatInput>;

    @Field(() => [PokemonStatsCreateOrConnectWithoutStatInput], {nullable:true})
    @Type(() => PokemonStatsCreateOrConnectWithoutStatInput)
    connectOrCreate?: Array<PokemonStatsCreateOrConnectWithoutStatInput>;

    @Field(() => PokemonStatsCreateManyStatInputEnvelope, {nullable:true})
    @Type(() => PokemonStatsCreateManyStatInputEnvelope)
    createMany?: Identity<PokemonStatsCreateManyStatInputEnvelope>;

    @Field(() => [PokemonStatsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonStatsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonStatsWhereUniqueInput, 'pokemon_id_stat_id'>>;
}
