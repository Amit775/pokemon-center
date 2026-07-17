import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class LanguagesCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    iso639!: number;

    @Field(() => Int, {nullable:false})
    iso3166!: number;

    @Field(() => Int, {nullable:false})
    identifier!: number;

    @Field(() => Int, {nullable:false})
    official!: number;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
