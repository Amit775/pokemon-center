import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestCombosUncheckedUpdateManyInput } from './contest-combos-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { ContestCombosWhereInput } from './contest-combos-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyContestCombosArgs {

    @Field(() => ContestCombosUncheckedUpdateManyInput, {nullable:false})
    @Type(() => ContestCombosUncheckedUpdateManyInput)
    data!: ContestCombosUncheckedUpdateManyInput;

    @Field(() => ContestCombosWhereInput, {nullable:true})
    @Type(() => ContestCombosWhereInput)
    where?: ContestCombosWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
