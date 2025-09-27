import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonFormsWhereInput } from './pokemon-forms-where.input';
import { Type } from 'class-transformer';
import { PokemonFormsOrderByWithRelationInput } from './pokemon-forms-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonFormsWhereUniqueInput } from './pokemon-forms-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonFormsCountAggregateInput } from './pokemon-forms-count-aggregate.input';
import { PokemonFormsAvgAggregateInput } from './pokemon-forms-avg-aggregate.input';
import { PokemonFormsSumAggregateInput } from './pokemon-forms-sum-aggregate.input';
import { PokemonFormsMinAggregateInput } from './pokemon-forms-min-aggregate.input';
import { PokemonFormsMaxAggregateInput } from './pokemon-forms-max-aggregate.input';

@ArgsType()
export class PokemonFormsAggregateArgs {

    @Field(() => PokemonFormsWhereInput, {nullable:true})
    @Type(() => PokemonFormsWhereInput)
    where?: PokemonFormsWhereInput;

    @Field(() => [PokemonFormsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonFormsOrderByWithRelationInput>;

    @Field(() => PokemonFormsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonFormsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PokemonFormsCountAggregateInput, {nullable:true})
    _count?: PokemonFormsCountAggregateInput;

    @Field(() => PokemonFormsAvgAggregateInput, {nullable:true})
    _avg?: PokemonFormsAvgAggregateInput;

    @Field(() => PokemonFormsSumAggregateInput, {nullable:true})
    _sum?: PokemonFormsSumAggregateInput;

    @Field(() => PokemonFormsMinAggregateInput, {nullable:true})
    _min?: PokemonFormsMinAggregateInput;

    @Field(() => PokemonFormsMaxAggregateInput, {nullable:true})
    _max?: PokemonFormsMaxAggregateInput;
}
