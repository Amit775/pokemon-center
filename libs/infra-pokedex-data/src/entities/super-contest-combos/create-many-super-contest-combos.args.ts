import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SuperContestCombosCreateManyInput } from './super-contest-combos-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySuperContestCombosArgs {

    @Field(() => [SuperContestCombosCreateManyInput], {nullable:false})
    @Type(() => SuperContestCombosCreateManyInput)
    data!: Array<SuperContestCombosCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
