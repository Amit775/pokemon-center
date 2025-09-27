import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NaturesCountAggregate } from './natures-count-aggregate.output';
import { NaturesAvgAggregate } from './natures-avg-aggregate.output';
import { NaturesSumAggregate } from './natures-sum-aggregate.output';
import { NaturesMinAggregate } from './natures-min-aggregate.output';
import { NaturesMaxAggregate } from './natures-max-aggregate.output';

@ObjectType()
export class AggregateNatures {

    @Field(() => NaturesCountAggregate, {nullable:true})
    _count?: NaturesCountAggregate;

    @Field(() => NaturesAvgAggregate, {nullable:true})
    _avg?: NaturesAvgAggregate;

    @Field(() => NaturesSumAggregate, {nullable:true})
    _sum?: NaturesSumAggregate;

    @Field(() => NaturesMinAggregate, {nullable:true})
    _min?: NaturesMinAggregate;

    @Field(() => NaturesMaxAggregate, {nullable:true})
    _max?: NaturesMaxAggregate;
}
