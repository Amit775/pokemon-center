import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonDexNumbersWhereInput } from './pokemon-dex-numbers-where.input';
import { Type } from 'class-transformer';
import { PokemonDexNumbersOrderByWithRelationInput } from './pokemon-dex-numbers-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
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
    where?: PokemonDexNumbersWhereInput;

    @Field(() => [PokemonDexNumbersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonDexNumbersOrderByWithRelationInput>;

    @Field(() => PokemonDexNumbersWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonDexNumbersWhereUniqueInput, 'species_id_pokedex_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonDexNumbersCountAggregateInput, {nullable:true})
    _count?: PokemonDexNumbersCountAggregateInput;

    @Field(() => PokemonDexNumbersAvgAggregateInput, {nullable:true})
    _avg?: PokemonDexNumbersAvgAggregateInput;

    @Field(() => PokemonDexNumbersSumAggregateInput, {nullable:true})
    _sum?: PokemonDexNumbersSumAggregateInput;

    @Field(() => PokemonDexNumbersMinAggregateInput, {nullable:true})
    _min?: PokemonDexNumbersMinAggregateInput;

    @Field(() => PokemonDexNumbersMaxAggregateInput, {nullable:true})
    _max?: PokemonDexNumbersMaxAggregateInput;
}
