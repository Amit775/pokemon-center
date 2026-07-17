import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypeGameIndicesWhereInput } from './type-game-indices-where.input';
import { Type } from 'class-transformer';
import { TypeGameIndicesOrderByWithAggregationInput } from './type-game-indices-order-by-with-aggregation.input';
import { TypeGameIndicesScalarFieldEnum } from './type-game-indices-scalar-field.enum';
import { TypeGameIndicesScalarWhereWithAggregatesInput } from './type-game-indices-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TypeGameIndicesCountAggregateInput } from './type-game-indices-count-aggregate.input';
import { TypeGameIndicesAvgAggregateInput } from './type-game-indices-avg-aggregate.input';
import { TypeGameIndicesSumAggregateInput } from './type-game-indices-sum-aggregate.input';
import { TypeGameIndicesMinAggregateInput } from './type-game-indices-min-aggregate.input';
import { TypeGameIndicesMaxAggregateInput } from './type-game-indices-max-aggregate.input';

@ArgsType()
export class TypeGameIndicesGroupByArgs {

    @Field(() => TypeGameIndicesWhereInput, {nullable:true})
    @Type(() => TypeGameIndicesWhereInput)
    where?: Identity<TypeGameIndicesWhereInput>;

    @Field(() => [TypeGameIndicesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TypeGameIndicesOrderByWithAggregationInput>;

    @Field(() => [TypeGameIndicesScalarFieldEnum], {nullable:false})
    by!: Array<`${TypeGameIndicesScalarFieldEnum}`>;

    @Field(() => TypeGameIndicesScalarWhereWithAggregatesInput, {nullable:true})
    having?: Identity<TypeGameIndicesScalarWhereWithAggregatesInput>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TypeGameIndicesCountAggregateInput, {nullable:true})
    _count?: Identity<TypeGameIndicesCountAggregateInput>;

    @Field(() => TypeGameIndicesAvgAggregateInput, {nullable:true})
    _avg?: Identity<TypeGameIndicesAvgAggregateInput>;

    @Field(() => TypeGameIndicesSumAggregateInput, {nullable:true})
    _sum?: Identity<TypeGameIndicesSumAggregateInput>;

    @Field(() => TypeGameIndicesMinAggregateInput, {nullable:true})
    _min?: Identity<TypeGameIndicesMinAggregateInput>;

    @Field(() => TypeGameIndicesMaxAggregateInput, {nullable:true})
    _max?: Identity<TypeGameIndicesMaxAggregateInput>;
}
