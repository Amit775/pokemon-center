import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokedexVersionGroupsWhereInput } from './pokedex-version-groups-where.input';
import { Type } from 'class-transformer';
import { PokedexVersionGroupsOrderByWithRelationInput } from './pokedex-version-groups-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokedexVersionGroupsWhereUniqueInput } from './pokedex-version-groups-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokedexVersionGroupsCountAggregateInput } from './pokedex-version-groups-count-aggregate.input';
import { PokedexVersionGroupsAvgAggregateInput } from './pokedex-version-groups-avg-aggregate.input';
import { PokedexVersionGroupsSumAggregateInput } from './pokedex-version-groups-sum-aggregate.input';
import { PokedexVersionGroupsMinAggregateInput } from './pokedex-version-groups-min-aggregate.input';
import { PokedexVersionGroupsMaxAggregateInput } from './pokedex-version-groups-max-aggregate.input';

@ArgsType()
export class PokedexVersionGroupsAggregateArgs {

    @Field(() => PokedexVersionGroupsWhereInput, {nullable:true})
    @Type(() => PokedexVersionGroupsWhereInput)
    where?: Identity<PokedexVersionGroupsWhereInput>;

    @Field(() => [PokedexVersionGroupsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokedexVersionGroupsOrderByWithRelationInput>;

    @Field(() => PokedexVersionGroupsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokedexVersionGroupsWhereUniqueInput, 'pokedex_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokedexVersionGroupsCountAggregateInput, {nullable:true})
    _count?: Identity<PokedexVersionGroupsCountAggregateInput>;

    @Field(() => PokedexVersionGroupsAvgAggregateInput, {nullable:true})
    _avg?: Identity<PokedexVersionGroupsAvgAggregateInput>;

    @Field(() => PokedexVersionGroupsSumAggregateInput, {nullable:true})
    _sum?: Identity<PokedexVersionGroupsSumAggregateInput>;

    @Field(() => PokedexVersionGroupsMinAggregateInput, {nullable:true})
    _min?: Identity<PokedexVersionGroupsMinAggregateInput>;

    @Field(() => PokedexVersionGroupsMaxAggregateInput, {nullable:true})
    _max?: Identity<PokedexVersionGroupsMaxAggregateInput>;
}
