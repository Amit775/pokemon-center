import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokedexesWhereInput } from './pokedexes-where.input';
import { Type } from 'class-transformer';
import { PokedexesOrderByWithRelationInput } from './pokedexes-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokedexesCountAggregateInput } from './pokedexes-count-aggregate.input';
import { PokedexesAvgAggregateInput } from './pokedexes-avg-aggregate.input';
import { PokedexesSumAggregateInput } from './pokedexes-sum-aggregate.input';
import { PokedexesMinAggregateInput } from './pokedexes-min-aggregate.input';
import { PokedexesMaxAggregateInput } from './pokedexes-max-aggregate.input';

@ArgsType()
export class PokedexesAggregateArgs {

    @Field(() => PokedexesWhereInput, {nullable:true})
    @Type(() => PokedexesWhereInput)
    where?: Identity<PokedexesWhereInput>;

    @Field(() => [PokedexesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokedexesOrderByWithRelationInput>;

    @Field(() => PokedexesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokedexesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokedexesCountAggregateInput, {nullable:true})
    _count?: Identity<PokedexesCountAggregateInput>;

    @Field(() => PokedexesAvgAggregateInput, {nullable:true})
    _avg?: Identity<PokedexesAvgAggregateInput>;

    @Field(() => PokedexesSumAggregateInput, {nullable:true})
    _sum?: Identity<PokedexesSumAggregateInput>;

    @Field(() => PokedexesMinAggregateInput, {nullable:true})
    _min?: Identity<PokedexesMinAggregateInput>;

    @Field(() => PokedexesMaxAggregateInput, {nullable:true})
    _max?: Identity<PokedexesMaxAggregateInput>;
}
