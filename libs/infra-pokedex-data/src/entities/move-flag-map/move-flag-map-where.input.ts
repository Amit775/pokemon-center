import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
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
    move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    move_flag_id?: IntFilter;

    @Field(() => MovesScalarRelationFilter, {nullable:true})
    move?: MovesScalarRelationFilter;

    @Field(() => MoveFlagsScalarRelationFilter, {nullable:true})
    flag?: MoveFlagsScalarRelationFilter;
}
