import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TypeEfficacyCountAggregate } from './type-efficacy-count-aggregate.output';
import { TypeEfficacyAvgAggregate } from './type-efficacy-avg-aggregate.output';
import { TypeEfficacySumAggregate } from './type-efficacy-sum-aggregate.output';
import { TypeEfficacyMinAggregate } from './type-efficacy-min-aggregate.output';
import { TypeEfficacyMaxAggregate } from './type-efficacy-max-aggregate.output';

@ObjectType()
export class AggregateTypeEfficacy {

    @Field(() => TypeEfficacyCountAggregate, {nullable:true})
    _count?: TypeEfficacyCountAggregate;

    @Field(() => TypeEfficacyAvgAggregate, {nullable:true})
    _avg?: TypeEfficacyAvgAggregate;

    @Field(() => TypeEfficacySumAggregate, {nullable:true})
    _sum?: TypeEfficacySumAggregate;

    @Field(() => TypeEfficacyMinAggregate, {nullable:true})
    _min?: TypeEfficacyMinAggregate;

    @Field(() => TypeEfficacyMaxAggregate, {nullable:true})
    _max?: TypeEfficacyMaxAggregate;
}
