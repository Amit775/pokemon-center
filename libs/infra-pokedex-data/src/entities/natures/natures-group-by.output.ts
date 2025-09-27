import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NaturesCountAggregate } from './natures-count-aggregate.output';
import { NaturesAvgAggregate } from './natures-avg-aggregate.output';
import { NaturesSumAggregate } from './natures-sum-aggregate.output';
import { NaturesMinAggregate } from './natures-min-aggregate.output';
import { NaturesMaxAggregate } from './natures-max-aggregate.output';

@ObjectType()
export class NaturesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    decreased_stat_id!: number;

    @Field(() => Int, {nullable:false})
    increased_stat_id!: number;

    @Field(() => Int, {nullable:false})
    hates_flavor_id!: number;

    @Field(() => Int, {nullable:false})
    likes_flavor_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

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
