import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonHabitatsWhereInput } from './pokemon-habitats-where.input';
import { Type } from 'class-transformer';
import { PokemonHabitatsOrderByWithRelationInput } from './pokemon-habitats-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonHabitatsWhereUniqueInput } from './pokemon-habitats-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonHabitatsCountAggregateInput } from './pokemon-habitats-count-aggregate.input';
import { PokemonHabitatsAvgAggregateInput } from './pokemon-habitats-avg-aggregate.input';
import { PokemonHabitatsSumAggregateInput } from './pokemon-habitats-sum-aggregate.input';
import { PokemonHabitatsMinAggregateInput } from './pokemon-habitats-min-aggregate.input';
import { PokemonHabitatsMaxAggregateInput } from './pokemon-habitats-max-aggregate.input';

@ArgsType()
export class PokemonHabitatsAggregateArgs {

    @Field(() => PokemonHabitatsWhereInput, {nullable:true})
    @Type(() => PokemonHabitatsWhereInput)
    where?: Identity<PokemonHabitatsWhereInput>;

    @Field(() => [PokemonHabitatsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonHabitatsOrderByWithRelationInput>;

    @Field(() => PokemonHabitatsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonHabitatsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonHabitatsCountAggregateInput, {nullable:true})
    _count?: Identity<PokemonHabitatsCountAggregateInput>;

    @Field(() => PokemonHabitatsAvgAggregateInput, {nullable:true})
    _avg?: Identity<PokemonHabitatsAvgAggregateInput>;

    @Field(() => PokemonHabitatsSumAggregateInput, {nullable:true})
    _sum?: Identity<PokemonHabitatsSumAggregateInput>;

    @Field(() => PokemonHabitatsMinAggregateInput, {nullable:true})
    _min?: Identity<PokemonHabitatsMinAggregateInput>;

    @Field(() => PokemonHabitatsMaxAggregateInput, {nullable:true})
    _max?: Identity<PokemonHabitatsMaxAggregateInput>;
}
