import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { MovesScalarRelationFilter } from '../moves/moves-scalar-relation-filter.input';

@InputType()
export class SuperContestCombosWhereInput {

    @Field(() => [SuperContestCombosWhereInput], {nullable:true})
    AND?: Array<SuperContestCombosWhereInput>;

    @Field(() => [SuperContestCombosWhereInput], {nullable:true})
    OR?: Array<SuperContestCombosWhereInput>;

    @Field(() => [SuperContestCombosWhereInput], {nullable:true})
    NOT?: Array<SuperContestCombosWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    first_move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    second_move_id?: IntFilter;

    @Field(() => MovesScalarRelationFilter, {nullable:true})
    firstMove?: MovesScalarRelationFilter;

    @Field(() => MovesScalarRelationFilter, {nullable:true})
    secondMove?: MovesScalarRelationFilter;
}
