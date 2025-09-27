import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SuperContestEffectsWhereInput } from './super-contest-effects-where.input';
import { Type } from 'class-transformer';
import { SuperContestEffectsOrderByWithRelationInput } from './super-contest-effects-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SuperContestEffectsWhereUniqueInput } from './super-contest-effects-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SuperContestEffectsCountAggregateInput } from './super-contest-effects-count-aggregate.input';
import { SuperContestEffectsAvgAggregateInput } from './super-contest-effects-avg-aggregate.input';
import { SuperContestEffectsSumAggregateInput } from './super-contest-effects-sum-aggregate.input';
import { SuperContestEffectsMinAggregateInput } from './super-contest-effects-min-aggregate.input';
import { SuperContestEffectsMaxAggregateInput } from './super-contest-effects-max-aggregate.input';

@ArgsType()
export class SuperContestEffectsAggregateArgs {

    @Field(() => SuperContestEffectsWhereInput, {nullable:true})
    @Type(() => SuperContestEffectsWhereInput)
    where?: SuperContestEffectsWhereInput;

    @Field(() => [SuperContestEffectsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SuperContestEffectsOrderByWithRelationInput>;

    @Field(() => SuperContestEffectsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SuperContestEffectsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SuperContestEffectsCountAggregateInput, {nullable:true})
    _count?: SuperContestEffectsCountAggregateInput;

    @Field(() => SuperContestEffectsAvgAggregateInput, {nullable:true})
    _avg?: SuperContestEffectsAvgAggregateInput;

    @Field(() => SuperContestEffectsSumAggregateInput, {nullable:true})
    _sum?: SuperContestEffectsSumAggregateInput;

    @Field(() => SuperContestEffectsMinAggregateInput, {nullable:true})
    _min?: SuperContestEffectsMinAggregateInput;

    @Field(() => SuperContestEffectsMaxAggregateInput, {nullable:true})
    _max?: SuperContestEffectsMaxAggregateInput;
}
