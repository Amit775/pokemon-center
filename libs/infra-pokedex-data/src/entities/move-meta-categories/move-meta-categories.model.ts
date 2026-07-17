import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { MoveMeta } from '../move-meta/move-meta.model';
import { MoveMetaCategoriesCount } from './move-meta-categories-count.output';
import type { Identity } from 'identity-type';

/**
 * @@TypeGraphQL.type(name: "MoveMetaCategory")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "MoveMetaCategory")'})
export class MoveMetaCategories {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [MoveMeta], {nullable:false})
    meta?: Array<MoveMeta>;

    @Field(() => MoveMetaCategoriesCount, {nullable:false})
    _count?: Identity<MoveMetaCategoriesCount>;
}
