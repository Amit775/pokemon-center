import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveBattleStylesWhereInput } from './move-battle-styles-where.input';
import { Type } from 'class-transformer';
import { MoveBattleStylesOrderByWithRelationInput } from './move-battle-styles-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { MoveBattleStylesWhereUniqueInput } from './move-battle-styles-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MoveBattleStylesCountAggregateInput } from './move-battle-styles-count-aggregate.input';
import { MoveBattleStylesAvgAggregateInput } from './move-battle-styles-avg-aggregate.input';
import { MoveBattleStylesSumAggregateInput } from './move-battle-styles-sum-aggregate.input';
import { MoveBattleStylesMinAggregateInput } from './move-battle-styles-min-aggregate.input';
import { MoveBattleStylesMaxAggregateInput } from './move-battle-styles-max-aggregate.input';

@ArgsType()
export class MoveBattleStylesAggregateArgs {

    @Field(() => MoveBattleStylesWhereInput, {nullable:true})
    @Type(() => MoveBattleStylesWhereInput)
    where?: Identity<MoveBattleStylesWhereInput>;

    @Field(() => [MoveBattleStylesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MoveBattleStylesOrderByWithRelationInput>;

    @Field(() => MoveBattleStylesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MoveBattleStylesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MoveBattleStylesCountAggregateInput, {nullable:true})
    _count?: Identity<MoveBattleStylesCountAggregateInput>;

    @Field(() => MoveBattleStylesAvgAggregateInput, {nullable:true})
    _avg?: Identity<MoveBattleStylesAvgAggregateInput>;

    @Field(() => MoveBattleStylesSumAggregateInput, {nullable:true})
    _sum?: Identity<MoveBattleStylesSumAggregateInput>;

    @Field(() => MoveBattleStylesMinAggregateInput, {nullable:true})
    _min?: Identity<MoveBattleStylesMinAggregateInput>;

    @Field(() => MoveBattleStylesMaxAggregateInput, {nullable:true})
    _max?: Identity<MoveBattleStylesMaxAggregateInput>;
}
