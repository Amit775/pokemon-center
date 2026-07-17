import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SuperContestCombosCreateInput } from './super-contest-combos-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSuperContestCombosArgs {

    @Field(() => SuperContestCombosCreateInput, {nullable:false})
    @Type(() => SuperContestCombosCreateInput)
    data!: SuperContestCombosCreateInput;
}
