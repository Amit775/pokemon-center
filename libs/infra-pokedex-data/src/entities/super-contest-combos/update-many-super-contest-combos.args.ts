import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SuperContestCombosUncheckedUpdateManyInput } from './super-contest-combos-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { SuperContestCombosWhereInput } from './super-contest-combos-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManySuperContestCombosArgs {

    @Field(() => SuperContestCombosUncheckedUpdateManyInput, {nullable:false})
    @Type(() => SuperContestCombosUncheckedUpdateManyInput)
    data!: SuperContestCombosUncheckedUpdateManyInput;

    @Field(() => SuperContestCombosWhereInput, {nullable:true})
    @Type(() => SuperContestCombosWhereInput)
    where?: SuperContestCombosWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
