import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { MovesScalarRelationFilter } from '../moves/moves-scalar-relation-filter.input';
import { MoveFlagsScalarRelationFilter } from '../move-flags/move-flags-scalar-relation-filter.input';

@InputType()
export class MoveFlagMapWhereInput {

    @Field(() => [MoveFlagMapWhereInput], {nullable:true})
    AND?: Array<MoveFlagMapWhereInput>;

    @Field(() => [MoveFlagMapWhereInput], {nullable:true})
    OR?: Array<MoveFlagMapWhereInput>;

    @Field(() => [MoveFlagMapWhereInput], {nullable:true})
    NOT?: Array<MoveFlagMapWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    move_flag_id?: Identity<IntFilter>;

    @Field(() => MovesScalarRelationFilter, {nullable:true})
    move?: Identity<MovesScalarRelationFilter>;

    @Field(() => MoveFlagsScalarRelationFilter, {nullable:true})
    flag?: Identity<MoveFlagsScalarRelationFilter>;
}
