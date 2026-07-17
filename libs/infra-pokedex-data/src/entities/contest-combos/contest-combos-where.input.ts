import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { MovesScalarRelationFilter } from '../moves/moves-scalar-relation-filter.input';

@InputType()
export class ContestCombosWhereInput {

    @Field(() => [ContestCombosWhereInput], {nullable:true})
    AND?: Array<ContestCombosWhereInput>;

    @Field(() => [ContestCombosWhereInput], {nullable:true})
    OR?: Array<ContestCombosWhereInput>;

    @Field(() => [ContestCombosWhereInput], {nullable:true})
    NOT?: Array<ContestCombosWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    first_move_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    second_move_id?: Identity<IntFilter>;

    @Field(() => MovesScalarRelationFilter, {nullable:true})
    firstMove?: Identity<MovesScalarRelationFilter>;

    @Field(() => MovesScalarRelationFilter, {nullable:true})
    secondMove?: Identity<MovesScalarRelationFilter>;
}
