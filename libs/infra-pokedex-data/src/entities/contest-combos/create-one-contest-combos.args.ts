import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestCombosCreateInput } from './contest-combos-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneContestCombosArgs {

    @Field(() => ContestCombosCreateInput, {nullable:false})
    @Type(() => ContestCombosCreateInput)
    data!: ContestCombosCreateInput;
}
