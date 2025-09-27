import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LanguagesWhereInput } from './languages-where.input';
import { Type } from 'class-transformer';
import { LanguagesOrderByWithAggregationInput } from './languages-order-by-with-aggregation.input';
import { LanguagesScalarFieldEnum } from './languages-scalar-field.enum';
import { LanguagesScalarWhereWithAggregatesInput } from './languages-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { LanguagesCountAggregateInput } from './languages-count-aggregate.input';
import { LanguagesAvgAggregateInput } from './languages-avg-aggregate.input';
import { LanguagesSumAggregateInput } from './languages-sum-aggregate.input';
import { LanguagesMinAggregateInput } from './languages-min-aggregate.input';
import { LanguagesMaxAggregateInput } from './languages-max-aggregate.input';

@ArgsType()
export class LanguagesGroupByArgs {

    @Field(() => LanguagesWhereInput, {nullable:true})
    @Type(() => LanguagesWhereInput)
    where?: LanguagesWhereInput;

    @Field(() => [LanguagesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LanguagesOrderByWithAggregationInput>;

    @Field(() => [LanguagesScalarFieldEnum], {nullable:false})
    by!: Array<`${LanguagesScalarFieldEnum}`>;

    @Field(() => LanguagesScalarWhereWithAggregatesInput, {nullable:true})
    having?: LanguagesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LanguagesCountAggregateInput, {nullable:true})
    _count?: LanguagesCountAggregateInput;

    @Field(() => LanguagesAvgAggregateInput, {nullable:true})
    _avg?: LanguagesAvgAggregateInput;

    @Field(() => LanguagesSumAggregateInput, {nullable:true})
    _sum?: LanguagesSumAggregateInput;

    @Field(() => LanguagesMinAggregateInput, {nullable:true})
    _min?: LanguagesMinAggregateInput;

    @Field(() => LanguagesMaxAggregateInput, {nullable:true})
    _max?: LanguagesMaxAggregateInput;
}
