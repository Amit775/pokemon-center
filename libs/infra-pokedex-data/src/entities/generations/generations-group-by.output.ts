import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GenerationsCountAggregate } from './generations-count-aggregate.output';
import { GenerationsAvgAggregate } from './generations-avg-aggregate.output';
import { GenerationsSumAggregate } from './generations-sum-aggregate.output';
import { GenerationsMinAggregate } from './generations-min-aggregate.output';
import { GenerationsMaxAggregate } from './generations-max-aggregate.output';

@ObjectType()
export class GenerationsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    main_region_id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => GenerationsCountAggregate, {nullable:true})
    _count?: GenerationsCountAggregate;

    @Field(() => GenerationsAvgAggregate, {nullable:true})
    _avg?: GenerationsAvgAggregate;

    @Field(() => GenerationsSumAggregate, {nullable:true})
    _sum?: GenerationsSumAggregate;

    @Field(() => GenerationsMinAggregate, {nullable:true})
    _min?: GenerationsMinAggregate;

    @Field(() => GenerationsMaxAggregate, {nullable:true})
    _max?: GenerationsMaxAggregate;
}
