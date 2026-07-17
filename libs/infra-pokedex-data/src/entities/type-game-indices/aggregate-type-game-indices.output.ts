import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypeGameIndicesCountAggregate } from './type-game-indices-count-aggregate.output';
import { TypeGameIndicesAvgAggregate } from './type-game-indices-avg-aggregate.output';
import { TypeGameIndicesSumAggregate } from './type-game-indices-sum-aggregate.output';
import { TypeGameIndicesMinAggregate } from './type-game-indices-min-aggregate.output';
import { TypeGameIndicesMaxAggregate } from './type-game-indices-max-aggregate.output';

@ObjectType()
export class AggregateTypeGameIndices {

    @Field(() => TypeGameIndicesCountAggregate, {nullable:true})
    _count?: Identity<TypeGameIndicesCountAggregate>;

    @Field(() => TypeGameIndicesAvgAggregate, {nullable:true})
    _avg?: Identity<TypeGameIndicesAvgAggregate>;

    @Field(() => TypeGameIndicesSumAggregate, {nullable:true})
    _sum?: Identity<TypeGameIndicesSumAggregate>;

    @Field(() => TypeGameIndicesMinAggregate, {nullable:true})
    _min?: Identity<TypeGameIndicesMinAggregate>;

    @Field(() => TypeGameIndicesMaxAggregate, {nullable:true})
    _max?: Identity<TypeGameIndicesMaxAggregate>;
}
