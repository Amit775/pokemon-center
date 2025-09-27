import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class SuperContestCombosScalarWhereInput {

    @Field(() => [SuperContestCombosScalarWhereInput], {nullable:true})
    AND?: Array<SuperContestCombosScalarWhereInput>;

    @Field(() => [SuperContestCombosScalarWhereInput], {nullable:true})
    OR?: Array<SuperContestCombosScalarWhereInput>;

    @Field(() => [SuperContestCombosScalarWhereInput], {nullable:true})
    NOT?: Array<SuperContestCombosScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    first_move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    second_move_id?: IntFilter;
}
