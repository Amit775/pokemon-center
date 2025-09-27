import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonAbilitiesWhereInput } from './pokemon-abilities-where.input';
import { Type } from 'class-transformer';
import { PokemonAbilitiesOrderByWithRelationInput } from './pokemon-abilities-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonAbilitiesWhereUniqueInput } from './pokemon-abilities-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonAbilitiesCountAggregateInput } from './pokemon-abilities-count-aggregate.input';
import { PokemonAbilitiesAvgAggregateInput } from './pokemon-abilities-avg-aggregate.input';
import { PokemonAbilitiesSumAggregateInput } from './pokemon-abilities-sum-aggregate.input';
import { PokemonAbilitiesMinAggregateInput } from './pokemon-abilities-min-aggregate.input';
import { PokemonAbilitiesMaxAggregateInput } from './pokemon-abilities-max-aggregate.input';

@ArgsType()
export class PokemonAbilitiesAggregateArgs {

    @Field(() => PokemonAbilitiesWhereInput, {nullable:true})
    @Type(() => PokemonAbilitiesWhereInput)
    where?: PokemonAbilitiesWhereInput;

    @Field(() => [PokemonAbilitiesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonAbilitiesOrderByWithRelationInput>;

    @Field(() => PokemonAbilitiesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonAbilitiesWhereUniqueInput, 'pokemon_id_ability_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonAbilitiesCountAggregateInput, {nullable:true})
    _count?: PokemonAbilitiesCountAggregateInput;

    @Field(() => PokemonAbilitiesAvgAggregateInput, {nullable:true})
    _avg?: PokemonAbilitiesAvgAggregateInput;

    @Field(() => PokemonAbilitiesSumAggregateInput, {nullable:true})
    _sum?: PokemonAbilitiesSumAggregateInput;

    @Field(() => PokemonAbilitiesMinAggregateInput, {nullable:true})
    _min?: PokemonAbilitiesMinAggregateInput;

    @Field(() => PokemonAbilitiesMaxAggregateInput, {nullable:true})
    _max?: PokemonAbilitiesMaxAggregateInput;
}
