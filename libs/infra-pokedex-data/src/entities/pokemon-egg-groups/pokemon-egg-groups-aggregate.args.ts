import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEggGroupsWhereInput } from './pokemon-egg-groups-where.input';
import { Type } from 'class-transformer';
import { PokemonEggGroupsOrderByWithRelationInput } from './pokemon-egg-groups-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonEggGroupsWhereUniqueInput } from './pokemon-egg-groups-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonEggGroupsCountAggregateInput } from './pokemon-egg-groups-count-aggregate.input';
import { PokemonEggGroupsAvgAggregateInput } from './pokemon-egg-groups-avg-aggregate.input';
import { PokemonEggGroupsSumAggregateInput } from './pokemon-egg-groups-sum-aggregate.input';
import { PokemonEggGroupsMinAggregateInput } from './pokemon-egg-groups-min-aggregate.input';
import { PokemonEggGroupsMaxAggregateInput } from './pokemon-egg-groups-max-aggregate.input';

@ArgsType()
export class PokemonEggGroupsAggregateArgs {

    @Field(() => PokemonEggGroupsWhereInput, {nullable:true})
    @Type(() => PokemonEggGroupsWhereInput)
    where?: Identity<PokemonEggGroupsWhereInput>;

    @Field(() => [PokemonEggGroupsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonEggGroupsOrderByWithRelationInput>;

    @Field(() => PokemonEggGroupsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonEggGroupsWhereUniqueInput, 'species_id_egg_group_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonEggGroupsCountAggregateInput, {nullable:true})
    _count?: Identity<PokemonEggGroupsCountAggregateInput>;

    @Field(() => PokemonEggGroupsAvgAggregateInput, {nullable:true})
    _avg?: Identity<PokemonEggGroupsAvgAggregateInput>;

    @Field(() => PokemonEggGroupsSumAggregateInput, {nullable:true})
    _sum?: Identity<PokemonEggGroupsSumAggregateInput>;

    @Field(() => PokemonEggGroupsMinAggregateInput, {nullable:true})
    _min?: Identity<PokemonEggGroupsMinAggregateInput>;

    @Field(() => PokemonEggGroupsMaxAggregateInput, {nullable:true})
    _max?: Identity<PokemonEggGroupsMaxAggregateInput>;
}
