import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { MovesScalarRelationFilter } from '../moves/moves-scalar-relation-filter.input';
import { MoveMetaCategoriesScalarRelationFilter } from '../move-meta-categories/move-meta-categories-scalar-relation-filter.input';
import { MoveMetaAilmentsNullableScalarRelationFilter } from '../move-meta-ailments/move-meta-ailments-nullable-scalar-relation-filter.input';
import { MoveMetaStatChangesListRelationFilter } from '../move-meta-stat-changes/move-meta-stat-changes-list-relation-filter.input';

@InputType()
export class MoveMetaWhereInput {

    @Field(() => [MoveMetaWhereInput], {nullable:true})
    AND?: Array<MoveMetaWhereInput>;

    @Field(() => [MoveMetaWhereInput], {nullable:true})
    OR?: Array<MoveMetaWhereInput>;

    @Field(() => [MoveMetaWhereInput], {nullable:true})
    NOT?: Array<MoveMetaWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    meta_category_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    meta_ailment_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    min_hits?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    max_hits?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    min_turns?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    max_turns?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    drain?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    healing?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    crit_rate?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    ailment_chance?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    flinch_chance?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    stat_chance?: IntFilter;

    @Field(() => MovesScalarRelationFilter, {nullable:true})
    move?: MovesScalarRelationFilter;

    @Field(() => MoveMetaCategoriesScalarRelationFilter, {nullable:true})
    metaCategory?: MoveMetaCategoriesScalarRelationFilter;

    @Field(() => MoveMetaAilmentsNullableScalarRelationFilter, {nullable:true})
    metaAilment?: MoveMetaAilmentsNullableScalarRelationFilter;

    @Field(() => MoveMetaStatChangesListRelationFilter, {nullable:true})
    statChanges?: MoveMetaStatChangesListRelationFilter;
}
