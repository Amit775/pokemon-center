import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MoveMetaCategoriesCreateNestedOneWithoutMetaInput } from '../move-meta-categories/move-meta-categories-create-nested-one-without-meta.input';
import { MoveMetaAilmentsCreateNestedOneWithoutMetaInput } from '../move-meta-ailments/move-meta-ailments-create-nested-one-without-meta.input';
import { MoveMetaStatChangesCreateNestedManyWithoutMetaInput } from '../move-meta-stat-changes/move-meta-stat-changes-create-nested-many-without-meta.input';

@InputType()
export class MoveMetaCreateWithoutMoveInput {

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

    @Field(() => MoveMetaCategoriesCreateNestedOneWithoutMetaInput, {nullable:false})
    metaCategory!: MoveMetaCategoriesCreateNestedOneWithoutMetaInput;

    @Field(() => MoveMetaAilmentsCreateNestedOneWithoutMetaInput, {nullable:true})
    metaAilment?: MoveMetaAilmentsCreateNestedOneWithoutMetaInput;

    @Field(() => MoveMetaStatChangesCreateNestedManyWithoutMetaInput, {nullable:true})
    statChanges?: MoveMetaStatChangesCreateNestedManyWithoutMetaInput;
}
