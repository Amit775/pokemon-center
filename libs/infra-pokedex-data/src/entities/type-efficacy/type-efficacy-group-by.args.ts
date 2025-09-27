import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypeEfficacyWhereInput } from './type-efficacy-where.input';
import { Type } from 'class-transformer';
import { TypeEfficacyOrderByWithAggregationInput } from './type-efficacy-order-by-with-aggregation.input';
import { TypeEfficacyScalarFieldEnum } from './type-efficacy-scalar-field.enum';
import { TypeEfficacyScalarWhereWithAggregatesInput } from './type-efficacy-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TypeEfficacyCountAggregateInput } from './type-efficacy-count-aggregate.input';
import { TypeEfficacyAvgAggregateInput } from './type-efficacy-avg-aggregate.input';
import { TypeEfficacySumAggregateInput } from './type-efficacy-sum-aggregate.input';
import { TypeEfficacyMinAggregateInput } from './type-efficacy-min-aggregate.input';
import { TypeEfficacyMaxAggregateInput } from './type-efficacy-max-aggregate.input';

@ArgsType()
export class TypeEfficacyGroupByArgs {

    @Field(() => TypeEfficacyWhereInput, {nullable:true})
    @Type(() => TypeEfficacyWhereInput)
    where?: TypeEfficacyWhereInput;

    @Field(() => [TypeEfficacyOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TypeEfficacyOrderByWithAggregationInput>;

    @Field(() => [TypeEfficacyScalarFieldEnum], {nullable:false})
    by!: Array<`${TypeEfficacyScalarFieldEnum}`>;

    @Field(() => TypeEfficacyScalarWhereWithAggregatesInput, {nullable:true})
    having?: TypeEfficacyScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TypeEfficacyCountAggregateInput, {nullable:true})
    _count?: TypeEfficacyCountAggregateInput;

    @Field(() => TypeEfficacyAvgAggregateInput, {nullable:true})
    _avg?: TypeEfficacyAvgAggregateInput;

    @Field(() => TypeEfficacySumAggregateInput, {nullable:true})
    _sum?: TypeEfficacySumAggregateInput;

    @Field(() => TypeEfficacyMinAggregateInput, {nullable:true})
    _min?: TypeEfficacyMinAggregateInput;

    @Field(() => TypeEfficacyMaxAggregateInput, {nullable:true})
    _max?: TypeEfficacyMaxAggregateInput;
}
