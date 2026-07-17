import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestCombosUncheckedUpdateManyInput } from './contest-combos-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { ContestCombosWhereInput } from './contest-combos-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyContestCombosArgs {

    @Field(() => ContestCombosUncheckedUpdateManyInput, {nullable:false})
    @Type(() => ContestCombosUncheckedUpdateManyInput)
    data!: Identity<ContestCombosUncheckedUpdateManyInput>;

    @Field(() => ContestCombosWhereInput, {nullable:true})
    @Type(() => ContestCombosWhereInput)
    where?: Identity<ContestCombosWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
