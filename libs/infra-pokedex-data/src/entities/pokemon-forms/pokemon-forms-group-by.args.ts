import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonFormsWhereInput } from './pokemon-forms-where.input';
import { Type } from 'class-transformer';
import { PokemonFormsOrderByWithAggregationInput } from './pokemon-forms-order-by-with-aggregation.input';
import { PokemonFormsScalarFieldEnum } from './pokemon-forms-scalar-field.enum';
import { PokemonFormsScalarWhereWithAggregatesInput } from './pokemon-forms-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PokemonFormsCountAggregateInput } from './pokemon-forms-count-aggregate.input';
import { PokemonFormsAvgAggregateInput } from './pokemon-forms-avg-aggregate.input';
import { PokemonFormsSumAggregateInput } from './pokemon-forms-sum-aggregate.input';
import { PokemonFormsMinAggregateInput } from './pokemon-forms-min-aggregate.input';
import { PokemonFormsMaxAggregateInput } from './pokemon-forms-max-aggregate.input';

@ArgsType()
export class PokemonFormsGroupByArgs {

    @Field(() => PokemonFormsWhereInput, {nullable:true})
    @Type(() => PokemonFormsWhereInput)
    where?: PokemonFormsWhereInput;

    @Field(() => [PokemonFormsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PokemonFormsOrderByWithAggregationInput>;

    @Field(() => [PokemonFormsScalarFieldEnum], {nullable:false})
    by!: Array<`${PokemonFormsScalarFieldEnum}`>;

    @Field(() => PokemonFormsScalarWhereWithAggregatesInput, {nullable:true})
    having?: PokemonFormsScalarWhereWithAggregatesInput;

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
