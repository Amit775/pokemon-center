import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonEggGroupsWhereInput } from './pokemon-egg-groups-where.input';
import { Type } from 'class-transformer';
import { PokemonEggGroupsOrderByWithRelationInput } from './pokemon-egg-groups-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonEggGroupsWhereUniqueInput } from './pokemon-egg-groups-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonEggGroupsScalarFieldEnum } from './pokemon-egg-groups-scalar-field.enum';

@ArgsType()
export class FindFirstPokemonEggGroupsArgs {

    @Field(() => PokemonEggGroupsWhereInput, {nullable:true})
    @Type(() => PokemonEggGroupsWhereInput)
    where?: PokemonEggGroupsWhereInput;

    @Field(() => [PokemonEggGroupsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonEggGroupsOrderByWithRelationInput>;

    @Field(() => PokemonEggGroupsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonEggGroupsWhereUniqueInput, 'species_id_egg_group_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PokemonEggGroupsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PokemonEggGroupsScalarFieldEnum}`>;
}
