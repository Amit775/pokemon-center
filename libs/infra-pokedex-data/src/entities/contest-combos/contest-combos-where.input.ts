import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
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
    first_move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    second_move_id?: IntFilter;

    @Field(() => MovesScalarRelationFilter, {nullable:true})
    firstMove?: MovesScalarRelationFilter;

    @Field(() => MovesScalarRelationFilter, {nullable:true})
    secondMove?: MovesScalarRelationFilter;
}
