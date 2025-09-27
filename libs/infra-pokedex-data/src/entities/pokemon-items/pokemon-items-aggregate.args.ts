import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonItemsWhereInput } from './pokemon-items-where.input';
import { Type } from 'class-transformer';
import { PokemonItemsOrderByWithRelationInput } from './pokemon-items-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonItemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonItemsCountAggregateInput } from './pokemon-items-count-aggregate.input';
import { PokemonItemsAvgAggregateInput } from './pokemon-items-avg-aggregate.input';
import { PokemonItemsSumAggregateInput } from './pokemon-items-sum-aggregate.input';
import { PokemonItemsMinAggregateInput } from './pokemon-items-min-aggregate.input';
import { PokemonItemsMaxAggregateInput } from './pokemon-items-max-aggregate.input';

@ArgsType()
export class PokemonItemsAggregateArgs {

    @Field(() => PokemonItemsWhereInput, {nullable:true})
    @Type(() => PokemonItemsWhereInput)
    where?: PokemonItemsWhereInput;

    @Field(() => [PokemonItemsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonItemsOrderByWithRelationInput>;

    @Field(() => PokemonItemsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonItemsCountAggregateInput, {nullable:true})
    _count?: PokemonItemsCountAggregateInput;

    @Field(() => PokemonItemsAvgAggregateInput, {nullable:true})
    _avg?: PokemonItemsAvgAggregateInput;

    @Field(() => PokemonItemsSumAggregateInput, {nullable:true})
    _sum?: PokemonItemsSumAggregateInput;

    @Field(() => PokemonItemsMinAggregateInput, {nullable:true})
    _min?: PokemonItemsMinAggregateInput;

    @Field(() => PokemonItemsMaxAggregateInput, {nullable:true})
    _max?: PokemonItemsMaxAggregateInput;
}
