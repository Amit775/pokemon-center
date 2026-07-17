import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { MovesScalarRelationFilter } from '../moves/moves-scalar-relation-filter.input';
import { MoveMetaCategoriesScalarRelationFilter } from '../move-meta-categories/move-meta-categories-scalar-relation-filter.input';
import { MoveMetaAilmentsScalarRelationFilter } from '../move-meta-ailments/move-meta-ailments-scalar-relation-filter.input';
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
    move_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    meta_category_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    meta_ailment_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    min_hits?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    max_hits?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    min_turns?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    max_turns?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    drain?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    healing?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    crit_rate?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    ailment_chance?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    flinch_chance?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    stat_chance?: Identity<IntFilter>;

    @Field(() => MovesScalarRelationFilter, {nullable:true})
    move?: Identity<MovesScalarRelationFilter>;

    @Field(() => MoveMetaCategoriesScalarRelationFilter, {nullable:true})
    metaCategory?: Identity<MoveMetaCategoriesScalarRelationFilter>;

    @Field(() => MoveMetaAilmentsScalarRelationFilter, {nullable:true})
    metaAilment?: Identity<MoveMetaAilmentsScalarRelationFilter>;

    @Field(() => MoveMetaStatChangesListRelationFilter, {nullable:true})
    statChanges?: Identity<MoveMetaStatChangesListRelationFilter>;
}
