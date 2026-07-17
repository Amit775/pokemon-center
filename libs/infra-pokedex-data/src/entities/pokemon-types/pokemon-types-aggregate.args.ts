import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonTypesWhereInput } from './pokemon-types-where.input';
import { Type } from 'class-transformer';
import { PokemonTypesOrderByWithRelationInput } from './pokemon-types-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonTypesWhereUniqueInput } from './pokemon-types-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonTypesCountAggregateInput } from './pokemon-types-count-aggregate.input';
import { PokemonTypesAvgAggregateInput } from './pokemon-types-avg-aggregate.input';
import { PokemonTypesSumAggregateInput } from './pokemon-types-sum-aggregate.input';
import { PokemonTypesMinAggregateInput } from './pokemon-types-min-aggregate.input';
import { PokemonTypesMaxAggregateInput } from './pokemon-types-max-aggregate.input';

@ArgsType()
export class PokemonTypesAggregateArgs {

    @Field(() => PokemonTypesWhereInput, {nullable:true})
    @Type(() => PokemonTypesWhereInput)
    where?: Identity<PokemonTypesWhereInput>;

    @Field(() => [PokemonTypesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonTypesOrderByWithRelationInput>;

    @Field(() => PokemonTypesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonTypesWhereUniqueInput, 'pokemon_id_type_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonTypesCountAggregateInput, {nullable:true})
    _count?: Identity<PokemonTypesCountAggregateInput>;

    @Field(() => PokemonTypesAvgAggregateInput, {nullable:true})
    _avg?: Identity<PokemonTypesAvgAggregateInput>;

    @Field(() => PokemonTypesSumAggregateInput, {nullable:true})
    _sum?: Identity<PokemonTypesSumAggregateInput>;

    @Field(() => PokemonTypesMinAggregateInput, {nullable:true})
    _min?: Identity<PokemonTypesMinAggregateInput>;

    @Field(() => PokemonTypesMaxAggregateInput, {nullable:true})
    _max?: Identity<PokemonTypesMaxAggregateInput>;
}
