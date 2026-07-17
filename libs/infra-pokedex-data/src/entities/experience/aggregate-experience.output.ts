import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ExperienceCountAggregate } from './experience-count-aggregate.output';
import { ExperienceAvgAggregate } from './experience-avg-aggregate.output';
import { ExperienceSumAggregate } from './experience-sum-aggregate.output';
import { ExperienceMinAggregate } from './experience-min-aggregate.output';
import { ExperienceMaxAggregate } from './experience-max-aggregate.output';

@ObjectType()
export class AggregateExperience {

    @Field(() => ExperienceCountAggregate, {nullable:true})
    _count?: Identity<ExperienceCountAggregate>;

    @Field(() => ExperienceAvgAggregate, {nullable:true})
    _avg?: Identity<ExperienceAvgAggregate>;

    @Field(() => ExperienceSumAggregate, {nullable:true})
    _sum?: Identity<ExperienceSumAggregate>;

    @Field(() => ExperienceMinAggregate, {nullable:true})
    _min?: Identity<ExperienceMinAggregate>;

    @Field(() => ExperienceMaxAggregate, {nullable:true})
    _max?: Identity<ExperienceMaxAggregate>;
}
