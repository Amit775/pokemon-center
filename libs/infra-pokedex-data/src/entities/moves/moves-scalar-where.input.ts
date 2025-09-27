import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class MovesScalarWhereInput {

    @Field(() => [MovesScalarWhereInput], {nullable:true})
    AND?: Array<MovesScalarWhereInput>;

    @Field(() => [MovesScalarWhereInput], {nullable:true})
    OR?: Array<MovesScalarWhereInput>;

    @Field(() => [MovesScalarWhereInput], {nullable:true})
    NOT?: Array<MovesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    type_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    power?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    pp?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    accuracy?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    priority?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    target_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    damage_class_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    effect_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    effect_chance?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    contest_type_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    contest_effect_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    super_contest_effect_id?: IntNullableFilter;
}
