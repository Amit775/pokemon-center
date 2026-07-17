import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class LanguagesCreateManyInput {

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
}
