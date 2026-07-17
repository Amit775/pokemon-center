import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonDexNumbersWhereInput } from './pokemon-dex-numbers-where.input';
import { Type } from 'class-transformer';
import { PokemonDexNumbersOrderByWithRelationInput } from './pokemon-dex-numbers-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonDexNumbersWhereUniqueInput } from './pokemon-dex-numbers-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonDexNumbersCountAggregateInput } from './pokemon-dex-numbers-count-aggregate.input';
import { PokemonDexNumbersAvgAggregateInput } from './pokemon-dex-numbers-avg-aggregate.input';
import { PokemonDexNumbersSumAggregateInput } from './pokemon-dex-numbers-sum-aggregate.input';
import { PokemonDexNumbersMinAggregateInput } from './pokemon-dex-numbers-min-aggregate.input';
import { PokemonDexNumbersMaxAggregateInput } from './pokemon-dex-numbers-max-aggregate.input';

@ArgsType()
export class PokemonDexNumbersAggregateArgs {

    @Field(() => PokemonDexNumbersWhereInput, {nullable:true})
    @Type(() => PokemonDexNumbersWhereInput)
    where?: Identity<PokemonDexNumbersWhereInput>;

    @Field(() => [PokemonDexNumbersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonDexNumbersOrderByWithRelationInput>;

    @Field(() => PokemonDexNumbersWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonDexNumbersWhereUniqueInput, 'species_id_pokedex_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonDexNumbersCountAggregateInput, {nullable:true})
    _count?: Identity<PokemonDexNumbersCountAggregateInput>;

    @Field(() => PokemonDexNumbersAvgAggregateInput, {nullable:true})
    _avg?: Identity<PokemonDexNumbersAvgAggregateInput>;

    @Field(() => PokemonDexNumbersSumAggregateInput, {nullable:true})
    _sum?: Identity<PokemonDexNumbersSumAggregateInput>;

    @Field(() => PokemonDexNumbersMinAggregateInput, {nullable:true})
    _min?: Identity<PokemonDexNumbersMinAggregateInput>;

    @Field(() => PokemonDexNumbersMaxAggregateInput, {nullable:true})
    _max?: Identity<PokemonDexNumbersMaxAggregateInput>;
}
