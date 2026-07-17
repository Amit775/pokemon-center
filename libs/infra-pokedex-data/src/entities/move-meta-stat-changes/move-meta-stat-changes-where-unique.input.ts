import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaStatChangesMove_idStat_idCompoundUniqueInput } from './move-meta-stat-changes-move-id-stat-id-compound-unique.input';
import { MoveMetaStatChangesWhereInput } from './move-meta-stat-changes-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StatsScalarRelationFilter } from '../stats/stats-scalar-relation-filter.input';
import { MoveMetaScalarRelationFilter } from '../move-meta/move-meta-scalar-relation-filter.input';

@InputType()
export class MoveMetaStatChangesWhereUniqueInput {

    @Field(() => MoveMetaStatChangesMove_idStat_idCompoundUniqueInput, {nullable:true})
    move_id_stat_id?: Identity<MoveMetaStatChangesMove_idStat_idCompoundUniqueInput>;

    @Field(() => [MoveMetaStatChangesWhereInput], {nullable:true})
    AND?: Array<MoveMetaStatChangesWhereInput>;

    @Field(() => [MoveMetaStatChangesWhereInput], {nullable:true})
    OR?: Array<MoveMetaStatChangesWhereInput>;

    @Field(() => [MoveMetaStatChangesWhereInput], {nullable:true})
    NOT?: Array<MoveMetaStatChangesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    stat_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    change?: Identity<IntFilter>;

    @Field(() => StatsScalarRelationFilter, {nullable:true})
    stat?: Identity<StatsScalarRelationFilter>;

    @Field(() => MoveMetaScalarRelationFilter, {nullable:true})
    meta?: Identity<MoveMetaScalarRelationFilter>;
}
