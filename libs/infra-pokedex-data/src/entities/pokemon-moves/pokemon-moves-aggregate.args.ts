import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonMovesWhereInput } from './pokemon-moves-where.input';
import { Type } from 'class-transformer';
import { PokemonMovesOrderByWithRelationInput } from './pokemon-moves-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonMovesWhereUniqueInput } from './pokemon-moves-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonMovesCountAggregateInput } from './pokemon-moves-count-aggregate.input';
import { PokemonMovesAvgAggregateInput } from './pokemon-moves-avg-aggregate.input';
import { PokemonMovesSumAggregateInput } from './pokemon-moves-sum-aggregate.input';
import { PokemonMovesMinAggregateInput } from './pokemon-moves-min-aggregate.input';
import { PokemonMovesMaxAggregateInput } from './pokemon-moves-max-aggregate.input';

@ArgsType()
export class PokemonMovesAggregateArgs {

    @Field(() => PokemonMovesWhereInput, {nullable:true})
    @Type(() => PokemonMovesWhereInput)
    where?: PokemonMovesWhereInput;

    @Field(() => [PokemonMovesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonMovesOrderByWithRelationInput>;

    @Field(() => PokemonMovesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonMovesWhereUniqueInput, 'pokemon_id_version_group_id_move_id_pokemon_move_method_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonMovesCountAggregateInput, {nullable:true})
    _count?: PokemonMovesCountAggregateInput;

    @Field(() => PokemonMovesAvgAggregateInput, {nullable:true})
    _avg?: PokemonMovesAvgAggregateInput;

    @Field(() => PokemonMovesSumAggregateInput, {nullable:true})
    _sum?: PokemonMovesSumAggregateInput;

    @Field(() => PokemonMovesMinAggregateInput, {nullable:true})
    _min?: PokemonMovesMinAggregateInput;

    @Field(() => PokemonMovesMaxAggregateInput, {nullable:true})
    _max?: PokemonMovesMaxAggregateInput;
}
