import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { SuperContestCombosWhereInput } from './super-contest-combos-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManySuperContestCombosArgs {

    @Field(() => SuperContestCombosWhereInput, {nullable:true})
    @Type(() => SuperContestCombosWhereInput)
    where?: Identity<SuperContestCombosWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
