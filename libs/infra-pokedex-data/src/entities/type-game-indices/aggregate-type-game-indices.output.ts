import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TypeGameIndicesCountAggregate } from './type-game-indices-count-aggregate.output';
import { TypeGameIndicesAvgAggregate } from './type-game-indices-avg-aggregate.output';
import { TypeGameIndicesSumAggregate } from './type-game-indices-sum-aggregate.output';
import { TypeGameIndicesMinAggregate } from './type-game-indices-min-aggregate.output';
import { TypeGameIndicesMaxAggregate } from './type-game-indices-max-aggregate.output';

@ObjectType()
export class AggregateTypeGameIndices {

    @Field(() => TypeGameIndicesCountAggregate, {nullable:true})
    _count?: TypeGameIndicesCountAggregate;

    @Field(() => TypeGameIndicesAvgAggregate, {nullable:true})
    _avg?: TypeGameIndicesAvgAggregate;

    @Field(() => TypeGameIndicesSumAggregate, {nullable:true})
    _sum?: TypeGameIndicesSumAggregate;

    @Field(() => TypeGameIndicesMinAggregate, {nullable:true})
    _min?: TypeGameIndicesMinAggregate;

    @Field(() => TypeGameIndicesMaxAggregate, {nullable:true})
    _max?: TypeGameIndicesMaxAggregate;
}
