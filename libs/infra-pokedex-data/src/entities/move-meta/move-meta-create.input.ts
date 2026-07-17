import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesCreateNestedOneWithoutMetaInput } from '../moves/moves-create-nested-one-without-meta.input';
import { MoveMetaCategoriesCreateNestedOneWithoutMetaInput } from '../move-meta-categories/move-meta-categories-create-nested-one-without-meta.input';
import { MoveMetaAilmentsCreateNestedOneWithoutMetaInput } from '../move-meta-ailments/move-meta-ailments-create-nested-one-without-meta.input';
import { MoveMetaStatChangesCreateNestedManyWithoutMetaInput } from '../move-meta-stat-changes/move-meta-stat-changes-create-nested-many-without-meta.input';

@InputType()
export class MoveMetaCreateInput {

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

    @Field(() => MovesCreateNestedOneWithoutMetaInput, {nullable:false})
    move!: Identity<MovesCreateNestedOneWithoutMetaInput>;

    @Field(() => MoveMetaCategoriesCreateNestedOneWithoutMetaInput, {nullable:false})
    metaCategory!: Identity<MoveMetaCategoriesCreateNestedOneWithoutMetaInput>;

    @Field(() => MoveMetaAilmentsCreateNestedOneWithoutMetaInput, {nullable:true})
    metaAilment?: Identity<MoveMetaAilmentsCreateNestedOneWithoutMetaInput>;

    @Field(() => MoveMetaStatChangesCreateNestedManyWithoutMetaInput, {nullable:true})
    statChanges?: Identity<MoveMetaStatChangesCreateNestedManyWithoutMetaInput>;
}
