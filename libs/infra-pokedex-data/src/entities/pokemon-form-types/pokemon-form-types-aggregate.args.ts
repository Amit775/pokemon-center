import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonFormTypesWhereInput } from './pokemon-form-types-where.input';
import { Type } from 'class-transformer';
import { PokemonFormTypesOrderByWithRelationInput } from './pokemon-form-types-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonFormTypesWhereUniqueInput } from './pokemon-form-types-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonFormTypesCountAggregateInput } from './pokemon-form-types-count-aggregate.input';
import { PokemonFormTypesAvgAggregateInput } from './pokemon-form-types-avg-aggregate.input';
import { PokemonFormTypesSumAggregateInput } from './pokemon-form-types-sum-aggregate.input';
import { PokemonFormTypesMinAggregateInput } from './pokemon-form-types-min-aggregate.input';
import { PokemonFormTypesMaxAggregateInput } from './pokemon-form-types-max-aggregate.input';

@ArgsType()
export class PokemonFormTypesAggregateArgs {

    @Field(() => PokemonFormTypesWhereInput, {nullable:true})
    @Type(() => PokemonFormTypesWhereInput)
    where?: PokemonFormTypesWhereInput;

    @Field(() => [PokemonFormTypesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonFormTypesOrderByWithRelationInput>;

    @Field(() => PokemonFormTypesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonFormTypesWhereUniqueInput, 'pokemon_form_id_type_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonFormTypesCountAggregateInput, {nullable:true})
    _count?: PokemonFormTypesCountAggregateInput;

    @Field(() => PokemonFormTypesAvgAggregateInput, {nullable:true})
    _avg?: PokemonFormTypesAvgAggregateInput;

    @Field(() => PokemonFormTypesSumAggregateInput, {nullable:true})
    _sum?: PokemonFormTypesSumAggregateInput;

    @Field(() => PokemonFormTypesMinAggregateInput, {nullable:true})
    _min?: PokemonFormTypesMinAggregateInput;

    @Field(() => PokemonFormTypesMaxAggregateInput, {nullable:true})
    _max?: PokemonFormTypesMaxAggregateInput;
}
