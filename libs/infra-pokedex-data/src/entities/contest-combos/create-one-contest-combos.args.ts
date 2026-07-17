import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestCombosCreateInput } from './contest-combos-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneContestCombosArgs {

    @Field(() => ContestCombosCreateInput, {nullable:false})
    @Type(() => ContestCombosCreateInput)
    data!: Identity<ContestCombosCreateInput>;
}
