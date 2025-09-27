import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterConditionsWhereInput } from './encounter-conditions-where.input';
import { Type } from 'class-transformer';
import { EncounterConditionsOrderByWithRelationInput } from './encounter-conditions-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EncounterConditionsWhereUniqueInput } from './encounter-conditions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EncounterConditionsCountAggregateInput } from './encounter-conditions-count-aggregate.input';
import { EncounterConditionsAvgAggregateInput } from './encounter-conditions-avg-aggregate.input';
import { EncounterConditionsSumAggregateInput } from './encounter-conditions-sum-aggregate.input';
import { EncounterConditionsMinAggregateInput } from './encounter-conditions-min-aggregate.input';
import { EncounterConditionsMaxAggregateInput } from './encounter-conditions-max-aggregate.input';

@ArgsType()
export class EncounterConditionsAggregateArgs {

    @Field(() => EncounterConditionsWhereInput, {nullable:true})
    @Type(() => EncounterConditionsWhereInput)
    where?: EncounterConditionsWhereInput;

    @Field(() => [EncounterConditionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EncounterConditionsOrderByWithRelationInput>;

    @Field(() => EncounterConditionsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EncounterConditionsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EncounterConditionsCountAggregateInput, {nullable:true})
    _count?: EncounterConditionsCountAggregateInput;

    @Field(() => EncounterConditionsAvgAggregateInput, {nullable:true})
    _avg?: EncounterConditionsAvgAggregateInput;

    @Field(() => EncounterConditionsSumAggregateInput, {nullable:true})
    _sum?: EncounterConditionsSumAggregateInput;

    @Field(() => EncounterConditionsMinAggregateInput, {nullable:true})
    _min?: EncounterConditionsMinAggregateInput;

    @Field(() => EncounterConditionsMaxAggregateInput, {nullable:true})
    _max?: EncounterConditionsMaxAggregateInput;
}
