import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaStatChangesUncheckedCreateNestedManyWithoutMetaInput } from '../move-meta-stat-changes/move-meta-stat-changes-unchecked-create-nested-many-without-meta.input';

@InputType()
export class MoveMetaUncheckedCreateWithoutMoveInput {

    @Field(() => Int, {nullable:false})
    meta_category_id!: number;

    @Field(() => Int, {nullable:true})
    meta_ailment_id?: number;

    @Field(() => Int, {nullable:true})
    min_hits?: number;

    @Field(() => Int, {nullable:true})
    max_hits?: number;

    @Field(() => Int, {nullable:true})
    min_turns?: number;

    @Field(() => Int, {nullable:true})
    max_turns?: number;

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

    @Field(() => MoveMetaStatChangesUncheckedCreateNestedManyWithoutMetaInput, {nullable:true})
    statChanges?: Identity<MoveMetaStatChangesUncheckedCreateNestedManyWithoutMetaInput>;
}
