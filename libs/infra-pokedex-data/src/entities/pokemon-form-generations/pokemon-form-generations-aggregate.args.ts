import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonFormGenerationsWhereInput } from './pokemon-form-generations-where.input';
import { Type } from 'class-transformer';
import { PokemonFormGenerationsOrderByWithRelationInput } from './pokemon-form-generations-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonFormGenerationsWhereUniqueInput } from './pokemon-form-generations-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonFormGenerationsCountAggregateInput } from './pokemon-form-generations-count-aggregate.input';
import { PokemonFormGenerationsAvgAggregateInput } from './pokemon-form-generations-avg-aggregate.input';
import { PokemonFormGenerationsSumAggregateInput } from './pokemon-form-generations-sum-aggregate.input';
import { PokemonFormGenerationsMinAggregateInput } from './pokemon-form-generations-min-aggregate.input';
import { PokemonFormGenerationsMaxAggregateInput } from './pokemon-form-generations-max-aggregate.input';

@ArgsType()
export class PokemonFormGenerationsAggregateArgs {

    @Field(() => PokemonFormGenerationsWhereInput, {nullable:true})
    @Type(() => PokemonFormGenerationsWhereInput)
    where?: PokemonFormGenerationsWhereInput;

    @Field(() => [PokemonFormGenerationsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonFormGenerationsOrderByWithRelationInput>;

    @Field(() => PokemonFormGenerationsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonFormGenerationsWhereUniqueInput, 'pokemon_form_id_generation_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonFormGenerationsCountAggregateInput, {nullable:true})
    _count?: PokemonFormGenerationsCountAggregateInput;

    @Field(() => PokemonFormGenerationsAvgAggregateInput, {nullable:true})
    _avg?: PokemonFormGenerationsAvgAggregateInput;

    @Field(() => PokemonFormGenerationsSumAggregateInput, {nullable:true})
    _sum?: PokemonFormGenerationsSumAggregateInput;

    @Field(() => PokemonFormGenerationsMinAggregateInput, {nullable:true})
    _min?: PokemonFormGenerationsMinAggregateInput;

    @Field(() => PokemonFormGenerationsMaxAggregateInput, {nullable:true})
    _max?: PokemonFormGenerationsMaxAggregateInput;
}
