import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GendersCountAggregate } from './genders-count-aggregate.output';
import { GendersAvgAggregate } from './genders-avg-aggregate.output';
import { GendersSumAggregate } from './genders-sum-aggregate.output';
import { GendersMinAggregate } from './genders-min-aggregate.output';
import { GendersMaxAggregate } from './genders-max-aggregate.output';

@ObjectType()
export class GendersGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => GendersCountAggregate, {nullable:true})
    _count?: GendersCountAggregate;

    @Field(() => GendersAvgAggregate, {nullable:true})
    _avg?: GendersAvgAggregate;

    @Field(() => GendersSumAggregate, {nullable:true})
    _sum?: GendersSumAggregate;

    @Field(() => GendersMinAggregate, {nullable:true})
    _min?: GendersMinAggregate;

    @Field(() => GendersMaxAggregate, {nullable:true})
    _max?: GendersMaxAggregate;
}
