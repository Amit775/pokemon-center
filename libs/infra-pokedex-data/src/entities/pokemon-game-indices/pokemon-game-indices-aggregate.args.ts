import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonGameIndicesWhereInput } from './pokemon-game-indices-where.input';
import { Type } from 'class-transformer';
import { PokemonGameIndicesOrderByWithRelationInput } from './pokemon-game-indices-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonGameIndicesWhereUniqueInput } from './pokemon-game-indices-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonGameIndicesCountAggregateInput } from './pokemon-game-indices-count-aggregate.input';
import { PokemonGameIndicesAvgAggregateInput } from './pokemon-game-indices-avg-aggregate.input';
import { PokemonGameIndicesSumAggregateInput } from './pokemon-game-indices-sum-aggregate.input';
import { PokemonGameIndicesMinAggregateInput } from './pokemon-game-indices-min-aggregate.input';
import { PokemonGameIndicesMaxAggregateInput } from './pokemon-game-indices-max-aggregate.input';

@ArgsType()
export class PokemonGameIndicesAggregateArgs {

    @Field(() => PokemonGameIndicesWhereInput, {nullable:true})
    @Type(() => PokemonGameIndicesWhereInput)
    where?: PokemonGameIndicesWhereInput;

    @Field(() => [PokemonGameIndicesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonGameIndicesOrderByWithRelationInput>;

    @Field(() => PokemonGameIndicesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonGameIndicesWhereUniqueInput, 'pokemon_id_version_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonGameIndicesCountAggregateInput, {nullable:true})
    _count?: PokemonGameIndicesCountAggregateInput;

    @Field(() => PokemonGameIndicesAvgAggregateInput, {nullable:true})
    _avg?: PokemonGameIndicesAvgAggregateInput;

    @Field(() => PokemonGameIndicesSumAggregateInput, {nullable:true})
    _sum?: PokemonGameIndicesSumAggregateInput;

    @Field(() => PokemonGameIndicesMinAggregateInput, {nullable:true})
    _min?: PokemonGameIndicesMinAggregateInput;

    @Field(() => PokemonGameIndicesMaxAggregateInput, {nullable:true})
    _max?: PokemonGameIndicesMaxAggregateInput;
}
