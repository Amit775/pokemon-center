import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonStatsWhereInput } from './pokemon-stats-where.input';
import { Type } from 'class-transformer';
import { PokemonStatsOrderByWithRelationInput } from './pokemon-stats-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonStatsWhereUniqueInput } from './pokemon-stats-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonStatsScalarFieldEnum } from './pokemon-stats-scalar-field.enum';

@ArgsType()
export class FindFirstPokemonStatsOrThrowArgs {

    @Field(() => PokemonStatsWhereInput, {nullable:true})
    @Type(() => PokemonStatsWhereInput)
    where?: PokemonStatsWhereInput;

    @Field(() => [PokemonStatsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonStatsOrderByWithRelationInput>;

    @Field(() => PokemonStatsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonStatsWhereUniqueInput, 'pokemon_id_stat_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PokemonStatsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PokemonStatsScalarFieldEnum}`>;
}
