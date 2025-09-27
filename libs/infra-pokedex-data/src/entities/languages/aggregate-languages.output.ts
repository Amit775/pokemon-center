import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LanguagesCountAggregate } from './languages-count-aggregate.output';
import { LanguagesAvgAggregate } from './languages-avg-aggregate.output';
import { LanguagesSumAggregate } from './languages-sum-aggregate.output';
import { LanguagesMinAggregate } from './languages-min-aggregate.output';
import { LanguagesMaxAggregate } from './languages-max-aggregate.output';

@ObjectType()
export class AggregateLanguages {

    @Field(() => LanguagesCountAggregate, {nullable:true})
    _count?: LanguagesCountAggregate;

    @Field(() => LanguagesAvgAggregate, {nullable:true})
    _avg?: LanguagesAvgAggregate;

    @Field(() => LanguagesSumAggregate, {nullable:true})
    _sum?: LanguagesSumAggregate;

    @Field(() => LanguagesMinAggregate, {nullable:true})
    _min?: LanguagesMinAggregate;

    @Field(() => LanguagesMaxAggregate, {nullable:true})
    _max?: LanguagesMaxAggregate;
}
