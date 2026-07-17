import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestCombosWhereInput } from './contest-combos-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyContestCombosArgs {

    @Field(() => ContestCombosWhereInput, {nullable:true})
    @Type(() => ContestCombosWhereInput)
    where?: ContestCombosWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
