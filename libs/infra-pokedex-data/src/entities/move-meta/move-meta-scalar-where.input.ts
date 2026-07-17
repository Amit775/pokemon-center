import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class MoveMetaScalarWhereInput {

    @Field(() => [MoveMetaScalarWhereInput], {nullable:true})
    AND?: Array<MoveMetaScalarWhereInput>;

    @Field(() => [MoveMetaScalarWhereInput], {nullable:true})
    OR?: Array<MoveMetaScalarWhereInput>;

    @Field(() => [MoveMetaScalarWhereInput], {nullable:true})
    NOT?: Array<MoveMetaScalarWhereInput>;

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
}
