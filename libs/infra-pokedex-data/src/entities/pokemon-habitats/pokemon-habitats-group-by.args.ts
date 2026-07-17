import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonHabitatsWhereInput } from './pokemon-habitats-where.input';
import { Type } from 'class-transformer';
import { PokemonHabitatsOrderByWithAggregationInput } from './pokemon-habitats-order-by-with-aggregation.input';
import { PokemonHabitatsScalarFieldEnum } from './pokemon-habitats-scalar-field.enum';
import { PokemonHabitatsScalarWhereWithAggregatesInput } from './pokemon-habitats-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PokemonHabitatsCountAggregateInput } from './pokemon-habitats-count-aggregate.input';
import { PokemonHabitatsAvgAggregateInput } from './pokemon-habitats-avg-aggregate.input';
import { PokemonHabitatsSumAggregateInput } from './pokemon-habitats-sum-aggregate.input';
import { PokemonHabitatsMinAggregateInput } from './pokemon-habitats-min-aggregate.input';
import { PokemonHabitatsMaxAggregateInput } from './pokemon-habitats-max-aggregate.input';

@ArgsType()
export class PokemonHabitatsGroupByArgs {

    @Field(() => PokemonHabitatsWhereInput, {nullable:true})
    @Type(() => PokemonHabitatsWhereInput)
    where?: Identity<PokemonHabitatsWhereInput>;

    @Field(() => [PokemonHabitatsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PokemonHabitatsOrderByWithAggregationInput>;

    @Field(() => [PokemonHabitatsScalarFieldEnum], {nullable:false})
    by!: Array<`${PokemonHabitatsScalarFieldEnum}`>;

    @Field(() => PokemonHabitatsScalarWhereWithAggregatesInput, {nullable:true})
    having?: Identity<PokemonHabitatsScalarWhereWithAggregatesInput>;

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
