import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SuperContestCombosWhereInput } from './super-contest-combos-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { MovesScalarRelationFilter } from '../moves/moves-scalar-relation-filter.input';

@InputType()
export class SuperContestCombosWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    first_move_id?: number;

    @Field(() => [SuperContestCombosWhereInput], {nullable:true})
    AND?: Array<SuperContestCombosWhereInput>;

    @Field(() => [SuperContestCombosWhereInput], {nullable:true})
    OR?: Array<SuperContestCombosWhereInput>;

    @Field(() => [SuperContestCombosWhereInput], {nullable:true})
    NOT?: Array<SuperContestCombosWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    second_move_id?: IntFilter;

    @Field(() => MovesScalarRelationFilter, {nullable:true})
    firstMove?: MovesScalarRelationFilter;

    @Field(() => MovesScalarRelationFilter, {nullable:true})
    secondMove?: MovesScalarRelationFilter;
}
