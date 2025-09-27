import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LanguagesCountAggregate } from './languages-count-aggregate.output';
import { LanguagesAvgAggregate } from './languages-avg-aggregate.output';
import { LanguagesSumAggregate } from './languages-sum-aggregate.output';
import { LanguagesMinAggregate } from './languages-min-aggregate.output';
import { LanguagesMaxAggregate } from './languages-max-aggregate.output';

@ObjectType()
export class LanguagesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    iso639!: string;

    @Field(() => String, {nullable:false})
    iso3166!: string;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    official!: number;

    @Field(() => Int, {nullable:false})
    order!: number;

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
