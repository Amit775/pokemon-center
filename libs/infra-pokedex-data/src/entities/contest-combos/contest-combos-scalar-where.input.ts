import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class ContestCombosScalarWhereInput {

    @Field(() => [ContestCombosScalarWhereInput], {nullable:true})
    AND?: Array<ContestCombosScalarWhereInput>;

    @Field(() => [ContestCombosScalarWhereInput], {nullable:true})
    OR?: Array<ContestCombosScalarWhereInput>;

    @Field(() => [ContestCombosScalarWhereInput], {nullable:true})
    NOT?: Array<ContestCombosScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    first_move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    second_move_id?: IntFilter;
}
