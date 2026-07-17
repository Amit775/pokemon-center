import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SuperContestCombosWhereInput } from './super-contest-combos-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManySuperContestCombosArgs {

    @Field(() => SuperContestCombosWhereInput, {nullable:true})
    @Type(() => SuperContestCombosWhereInput)
    where?: SuperContestCombosWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
