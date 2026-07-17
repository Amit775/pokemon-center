import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NaturesCountAggregate } from './natures-count-aggregate.output';
import { NaturesAvgAggregate } from './natures-avg-aggregate.output';
import { NaturesSumAggregate } from './natures-sum-aggregate.output';
import { NaturesMinAggregate } from './natures-min-aggregate.output';
import { NaturesMaxAggregate } from './natures-max-aggregate.output';

@ObjectType()
export class AggregateNatures {

    @Field(() => NaturesCountAggregate, {nullable:true})
    _count?: Identity<NaturesCountAggregate>;

    @Field(() => NaturesAvgAggregate, {nullable:true})
    _avg?: Identity<NaturesAvgAggregate>;

    @Field(() => NaturesSumAggregate, {nullable:true})
    _sum?: Identity<NaturesSumAggregate>;

    @Field(() => NaturesMinAggregate, {nullable:true})
    _min?: Identity<NaturesMinAggregate>;

    @Field(() => NaturesMaxAggregate, {nullable:true})
    _max?: Identity<NaturesMaxAggregate>;
}
