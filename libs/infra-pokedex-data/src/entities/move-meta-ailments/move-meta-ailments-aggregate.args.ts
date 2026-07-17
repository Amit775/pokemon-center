import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaAilmentsWhereInput } from './move-meta-ailments-where.input';
import { Type } from 'class-transformer';
import { MoveMetaAilmentsOrderByWithRelationInput } from './move-meta-ailments-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { MoveMetaAilmentsWhereUniqueInput } from './move-meta-ailments-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MoveMetaAilmentsCountAggregateInput } from './move-meta-ailments-count-aggregate.input';
import { MoveMetaAilmentsAvgAggregateInput } from './move-meta-ailments-avg-aggregate.input';
import { MoveMetaAilmentsSumAggregateInput } from './move-meta-ailments-sum-aggregate.input';
import { MoveMetaAilmentsMinAggregateInput } from './move-meta-ailments-min-aggregate.input';
import { MoveMetaAilmentsMaxAggregateInput } from './move-meta-ailments-max-aggregate.input';

@ArgsType()
export class MoveMetaAilmentsAggregateArgs {

    @Field(() => MoveMetaAilmentsWhereInput, {nullable:true})
    @Type(() => MoveMetaAilmentsWhereInput)
    where?: Identity<MoveMetaAilmentsWhereInput>;

    @Field(() => [MoveMetaAilmentsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MoveMetaAilmentsOrderByWithRelationInput>;

    @Field(() => MoveMetaAilmentsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MoveMetaAilmentsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MoveMetaAilmentsCountAggregateInput, {nullable:true})
    _count?: Identity<MoveMetaAilmentsCountAggregateInput>;

    @Field(() => MoveMetaAilmentsAvgAggregateInput, {nullable:true})
    _avg?: Identity<MoveMetaAilmentsAvgAggregateInput>;

    @Field(() => MoveMetaAilmentsSumAggregateInput, {nullable:true})
    _sum?: Identity<MoveMetaAilmentsSumAggregateInput>;

    @Field(() => MoveMetaAilmentsMinAggregateInput, {nullable:true})
    _min?: Identity<MoveMetaAilmentsMinAggregateInput>;

    @Field(() => MoveMetaAilmentsMaxAggregateInput, {nullable:true})
    _max?: Identity<MoveMetaAilmentsMaxAggregateInput>;
}
