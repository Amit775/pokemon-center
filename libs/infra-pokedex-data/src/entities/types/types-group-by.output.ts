import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TypesCountAggregate } from './types-count-aggregate.output';
import { TypesAvgAggregate } from './types-avg-aggregate.output';
import { TypesSumAggregate } from './types-sum-aggregate.output';
import { TypesMinAggregate } from './types-min-aggregate.output';
import { TypesMaxAggregate } from './types-max-aggregate.output';

@ObjectType()
export class TypesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:true})
    damage_class_id?: number;

    @Field(() => TypesCountAggregate, {nullable:true})
    _count?: TypesCountAggregate;

    @Field(() => TypesAvgAggregate, {nullable:true})
    _avg?: TypesAvgAggregate;

    @Field(() => TypesSumAggregate, {nullable:true})
    _sum?: TypesSumAggregate;

    @Field(() => TypesMinAggregate, {nullable:true})
    _min?: TypesMinAggregate;

    @Field(() => TypesMaxAggregate, {nullable:true})
    _max?: TypesMaxAggregate;
}
