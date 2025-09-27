import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Moves } from '../moves/moves.model';
import { MoveMetaCategories } from '../move-meta-categories/move-meta-categories.model';
import { MoveMetaAilments } from '../move-meta-ailments/move-meta-ailments.model';
import { MoveMetaStatChanges } from '../move-meta-stat-changes/move-meta-stat-changes.model';
import { MoveMetaCount } from './move-meta-count.output';

/**
 * @@TypeGraphQL.type(name: "MoveMeta")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "MoveMeta")'})
export class MoveMeta {

    @Field(() => ID, {nullable:false})
    move_id!: number;

    @Field(() => Int, {nullable:false})
    meta_category_id!: number;

    @Field(() => Int, {nullable:true})
    meta_ailment_id!: number | null;

    @Field(() => Int, {nullable:true})
    min_hits!: number | null;

    @Field(() => Int, {nullable:true})
    max_hits!: number | null;

    @Field(() => Int, {nullable:true})
    min_turns!: number | null;

    @Field(() => Int, {nullable:true})
    max_turns!: number | null;

    @Field(() => Int, {nullable:false})
    drain!: number;

    @Field(() => Int, {nullable:false})
    healing!: number;

    @Field(() => Int, {nullable:false})
    crit_rate!: number;

    @Field(() => Int, {nullable:false})
    ailment_chance!: number;

    @Field(() => Int, {nullable:false})
    flinch_chance!: number;

    @Field(() => Int, {nullable:false})
    stat_chance!: number;

    @Field(() => Moves, {nullable:false})
    move?: Moves;

    @Field(() => MoveMetaCategories, {nullable:false})
    metaCategory?: MoveMetaCategories;

    @Field(() => MoveMetaAilments, {nullable:true})
    metaAilment?: MoveMetaAilments | null;

    @Field(() => [MoveMetaStatChanges], {nullable:true})
    statChanges?: Array<MoveMetaStatChanges>;

    @Field(() => MoveMetaCount, {nullable:false})
    _count?: MoveMetaCount;
}
