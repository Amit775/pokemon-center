import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class MovesScalarWhereInput {

    @Field(() => [MovesScalarWhereInput], {nullable:true})
    AND?: Array<MovesScalarWhereInput>;

    @Field(() => [MovesScalarWhereInput], {nullable:true})
    OR?: Array<MovesScalarWhereInput>;

    @Field(() => [MovesScalarWhereInput], {nullable:true})
    NOT?: Array<MovesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    type_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    power?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    pp?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    accuracy?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    priority?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    target_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    damage_class_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    effect_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    effect_chance?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    contest_type_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    contest_effect_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    super_contest_effect_id?: Identity<IntFilter>;
}
