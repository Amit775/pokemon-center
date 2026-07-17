import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestCombosCreateManyInput } from './contest-combos-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyContestCombosArgs {

    @Field(() => [ContestCombosCreateManyInput], {nullable:false})
    @Type(() => ContestCombosCreateManyInput)
    data!: Array<ContestCombosCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
