import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveDamageClassesWhereInput } from './move-damage-classes-where.input';
import { Type } from 'class-transformer';
import { MoveDamageClassesOrderByWithAggregationInput } from './move-damage-classes-order-by-with-aggregation.input';
import { MoveDamageClassesScalarFieldEnum } from './move-damage-classes-scalar-field.enum';
import { MoveDamageClassesScalarWhereWithAggregatesInput } from './move-damage-classes-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MoveDamageClassesCountAggregateInput } from './move-damage-classes-count-aggregate.input';
import { MoveDamageClassesAvgAggregateInput } from './move-damage-classes-avg-aggregate.input';
import { MoveDamageClassesSumAggregateInput } from './move-damage-classes-sum-aggregate.input';
import { MoveDamageClassesMinAggregateInput } from './move-damage-classes-min-aggregate.input';
import { MoveDamageClassesMaxAggregateInput } from './move-damage-classes-max-aggregate.input';

@ArgsType()
export class MoveDamageClassesGroupByArgs {

    @Field(() => MoveDamageClassesWhereInput, {nullable:true})
    @Type(() => MoveDamageClassesWhereInput)
    where?: MoveDamageClassesWhereInput;

    @Field(() => [MoveDamageClassesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MoveDamageClassesOrderByWithAggregationInput>;

    @Field(() => [MoveDamageClassesScalarFieldEnum], {nullable:false})
    by!: Array<`${MoveDamageClassesScalarFieldEnum}`>;

    @Field(() => MoveDamageClassesScalarWhereWithAggregatesInput, {nullable:true})
    having?: MoveDamageClassesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MoveDamageClassesCountAggregateInput, {nullable:true})
    _count?: MoveDamageClassesCountAggregateInput;

    @Field(() => MoveDamageClassesAvgAggregateInput, {nullable:true})
    _avg?: MoveDamageClassesAvgAggregateInput;

    @Field(() => MoveDamageClassesSumAggregateInput, {nullable:true})
    _sum?: MoveDamageClassesSumAggregateInput;

    @Field(() => MoveDamageClassesMinAggregateInput, {nullable:true})
    _min?: MoveDamageClassesMinAggregateInput;

    @Field(() => MoveDamageClassesMaxAggregateInput, {nullable:true})
    _max?: MoveDamageClassesMaxAggregateInput;
}
