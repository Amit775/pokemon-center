import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterSlotsWhereInput } from './encounter-slots-where.input';
import { Type } from 'class-transformer';
import { EncounterSlotsOrderByWithRelationInput } from './encounter-slots-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EncounterSlotsWhereUniqueInput } from './encounter-slots-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EncounterSlotsCountAggregateInput } from './encounter-slots-count-aggregate.input';
import { EncounterSlotsAvgAggregateInput } from './encounter-slots-avg-aggregate.input';
import { EncounterSlotsSumAggregateInput } from './encounter-slots-sum-aggregate.input';
import { EncounterSlotsMinAggregateInput } from './encounter-slots-min-aggregate.input';
import { EncounterSlotsMaxAggregateInput } from './encounter-slots-max-aggregate.input';

@ArgsType()
export class EncounterSlotsAggregateArgs {

    @Field(() => EncounterSlotsWhereInput, {nullable:true})
    @Type(() => EncounterSlotsWhereInput)
    where?: EncounterSlotsWhereInput;

    @Field(() => [EncounterSlotsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EncounterSlotsOrderByWithRelationInput>;

    @Field(() => EncounterSlotsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EncounterSlotsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EncounterSlotsCountAggregateInput, {nullable:true})
    _count?: EncounterSlotsCountAggregateInput;

    @Field(() => EncounterSlotsAvgAggregateInput, {nullable:true})
    _avg?: EncounterSlotsAvgAggregateInput;

    @Field(() => EncounterSlotsSumAggregateInput, {nullable:true})
    _sum?: EncounterSlotsSumAggregateInput;

    @Field(() => EncounterSlotsMinAggregateInput, {nullable:true})
    _min?: EncounterSlotsMinAggregateInput;

    @Field(() => EncounterSlotsMaxAggregateInput, {nullable:true})
    _max?: EncounterSlotsMaxAggregateInput;
}
