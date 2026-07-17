import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

/**
 * @@TypeGraphQL.type(name: "Language")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "Language")'})
export class Languages {

    @Field(() => ID, {nullable:false})
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
