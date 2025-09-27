import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LanguagesWhereInput } from './languages-where.input';
import { Type } from 'class-transformer';
import { LanguagesOrderByWithRelationInput } from './languages-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LanguagesWhereUniqueInput } from './languages-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LanguagesCountAggregateInput } from './languages-count-aggregate.input';
import { LanguagesAvgAggregateInput } from './languages-avg-aggregate.input';
import { LanguagesSumAggregateInput } from './languages-sum-aggregate.input';
import { LanguagesMinAggregateInput } from './languages-min-aggregate.input';
import { LanguagesMaxAggregateInput } from './languages-max-aggregate.input';

@ArgsType()
export class LanguagesAggregateArgs {

    @Field(() => LanguagesWhereInput, {nullable:true})
    @Type(() => LanguagesWhereInput)
    where?: LanguagesWhereInput;

    @Field(() => [LanguagesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LanguagesOrderByWithRelationInput>;

    @Field(() => LanguagesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LanguagesWhereUniqueInput, 'id'>;

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
