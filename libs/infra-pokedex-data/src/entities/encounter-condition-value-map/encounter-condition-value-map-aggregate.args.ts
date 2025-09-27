import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterConditionValueMapWhereInput } from './encounter-condition-value-map-where.input';
import { Type } from 'class-transformer';
import { EncounterConditionValueMapOrderByWithRelationInput } from './encounter-condition-value-map-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EncounterConditionValueMapWhereUniqueInput } from './encounter-condition-value-map-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EncounterConditionValueMapCountAggregateInput } from './encounter-condition-value-map-count-aggregate.input';
import { EncounterConditionValueMapAvgAggregateInput } from './encounter-condition-value-map-avg-aggregate.input';
import { EncounterConditionValueMapSumAggregateInput } from './encounter-condition-value-map-sum-aggregate.input';
import { EncounterConditionValueMapMinAggregateInput } from './encounter-condition-value-map-min-aggregate.input';
import { EncounterConditionValueMapMaxAggregateInput } from './encounter-condition-value-map-max-aggregate.input';

@ArgsType()
export class EncounterConditionValueMapAggregateArgs {

    @Field(() => EncounterConditionValueMapWhereInput, {nullable:true})
    @Type(() => EncounterConditionValueMapWhereInput)
    where?: EncounterConditionValueMapWhereInput;

    @Field(() => [EncounterConditionValueMapOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EncounterConditionValueMapOrderByWithRelationInput>;

    @Field(() => EncounterConditionValueMapWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EncounterConditionValueMapWhereUniqueInput, 'encounter_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EncounterConditionValueMapCountAggregateInput, {nullable:true})
    _count?: EncounterConditionValueMapCountAggregateInput;

    @Field(() => EncounterConditionValueMapAvgAggregateInput, {nullable:true})
    _avg?: EncounterConditionValueMapAvgAggregateInput;

    @Field(() => EncounterConditionValueMapSumAggregateInput, {nullable:true})
    _sum?: EncounterConditionValueMapSumAggregateInput;

    @Field(() => EncounterConditionValueMapMinAggregateInput, {nullable:true})
    _min?: EncounterConditionValueMapMinAggregateInput;

    @Field(() => EncounterConditionValueMapMaxAggregateInput, {nullable:true})
    _max?: EncounterConditionValueMapMaxAggregateInput;
}
