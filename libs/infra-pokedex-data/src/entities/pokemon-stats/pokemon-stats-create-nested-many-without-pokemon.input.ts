import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonStatsCreateWithoutPokemonInput } from './pokemon-stats-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { PokemonStatsCreateOrConnectWithoutPokemonInput } from './pokemon-stats-create-or-connect-without-pokemon.input';
import type { Identity } from 'identity-type';
import { PokemonStatsCreateManyPokemonInputEnvelope } from './pokemon-stats-create-many-pokemon-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonStatsWhereUniqueInput } from './pokemon-stats-where-unique.input';

@InputType()
export class PokemonStatsCreateNestedManyWithoutPokemonInput {

    @Field(() => [PokemonStatsCreateWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonStatsCreateWithoutPokemonInput)
    create?: Array<PokemonStatsCreateWithoutPokemonInput>;

    @Field(() => [PokemonStatsCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => PokemonStatsCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<PokemonStatsCreateOrConnectWithoutPokemonInput>;

    @Field(() => PokemonStatsCreateManyPokemonInputEnvelope, {nullable:true})
    @Type(() => PokemonStatsCreateManyPokemonInputEnvelope)
    createMany?: Identity<PokemonStatsCreateManyPokemonInputEnvelope>;

    @Field(() => [PokemonStatsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonStatsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonStatsWhereUniqueInput, 'pokemon_id_stat_id'>>;
}
