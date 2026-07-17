import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaAilmentsCountAggregate } from './move-meta-ailments-count-aggregate.output';
import { MoveMetaAilmentsAvgAggregate } from './move-meta-ailments-avg-aggregate.output';
import { MoveMetaAilmentsSumAggregate } from './move-meta-ailments-sum-aggregate.output';
import { MoveMetaAilmentsMinAggregate } from './move-meta-ailments-min-aggregate.output';
import { MoveMetaAilmentsMaxAggregate } from './move-meta-ailments-max-aggregate.output';

@ObjectType()
export class AggregateMoveMetaAilments {

    @Field(() => MoveMetaAilmentsCountAggregate, {nullable:true})
    _count?: Identity<MoveMetaAilmentsCountAggregate>;

    @Field(() => MoveMetaAilmentsAvgAggregate, {nullable:true})
    _avg?: Identity<MoveMetaAilmentsAvgAggregate>;

    @Field(() => MoveMetaAilmentsSumAggregate, {nullable:true})
    _sum?: Identity<MoveMetaAilmentsSumAggregate>;

    @Field(() => MoveMetaAilmentsMinAggregate, {nullable:true})
    _min?: Identity<MoveMetaAilmentsMinAggregate>;

    @Field(() => MoveMetaAilmentsMaxAggregate, {nullable:true})
    _max?: Identity<MoveMetaAilmentsMaxAggregate>;
}
