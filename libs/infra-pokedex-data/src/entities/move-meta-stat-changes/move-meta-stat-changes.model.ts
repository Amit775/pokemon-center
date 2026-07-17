import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Stats } from '../stats/stats.model';
import type { Identity } from 'identity-type';
import { MoveMeta } from '../move-meta/move-meta.model';

/**
 * @@TypeGraphQL.type(name: "MoveMetaStatChanges")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "MoveMetaStatChanges")'})
export class MoveMetaStatChanges {

    @Field(() => Int, {nullable:false})
    move_id!: number;

    @Field(() => Int, {nullable:false})
    stat_id!: number;

    @Field(() => Int, {nullable:false})
    change!: number;

    @Field(() => Stats, {nullable:false})
    stat?: Identity<Stats>;

    @Field(() => MoveMeta, {nullable:false})
    meta?: Identity<MoveMeta>;
}
