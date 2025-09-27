import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class MoveMetaScalarWhereInput {

    @Field(() => [MoveMetaScalarWhereInput], {nullable:true})
    AND?: Array<MoveMetaScalarWhereInput>;

    @Field(() => [MoveMetaScalarWhereInput], {nullable:true})
    OR?: Array<MoveMetaScalarWhereInput>;

    @Field(() => [MoveMetaScalarWhereInput], {nullable:true})
    NOT?: Array<MoveMetaScalarWhereInput>;

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
}
