import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypesWhereInput } from './types-where.input';
import { Type } from 'class-transformer';
import { TypesOrderByWithAggregationInput } from './types-order-by-with-aggregation.input';
import { TypesScalarFieldEnum } from './types-scalar-field.enum';
import { TypesScalarWhereWithAggregatesInput } from './types-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TypesCountAggregateInput } from './types-count-aggregate.input';
import { TypesAvgAggregateInput } from './types-avg-aggregate.input';
import { TypesSumAggregateInput } from './types-sum-aggregate.input';
import { TypesMinAggregateInput } from './types-min-aggregate.input';
import { TypesMaxAggregateInput } from './types-max-aggregate.input';

@ArgsType()
export class TypesGroupByArgs {

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: TypesWhereInput;

    @Field(() => [TypesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TypesOrderByWithAggregationInput>;

    @Field(() => [TypesScalarFieldEnum], {nullable:false})
    by!: Array<`${TypesScalarFieldEnum}`>;

    @Field(() => TypesScalarWhereWithAggregatesInput, {nullable:true})
    having?: TypesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TypesCountAggregateInput, {nullable:true})
    _count?: TypesCountAggregateInput;

    @Field(() => TypesAvgAggregateInput, {nullable:true})
    _avg?: TypesAvgAggregateInput;

    @Field(() => TypesSumAggregateInput, {nullable:true})
    _sum?: TypesSumAggregateInput;

    @Field(() => TypesMinAggregateInput, {nullable:true})
    _min?: TypesMinAggregateInput;

    @Field(() => TypesMaxAggregateInput, {nullable:true})
    _max?: TypesMaxAggregateInput;
}
