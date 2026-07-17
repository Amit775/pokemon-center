import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { SuperContestCombosUncheckedUpdateManyInput } from './super-contest-combos-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { SuperContestCombosWhereInput } from './super-contest-combos-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManySuperContestCombosArgs {

    @Field(() => SuperContestCombosUncheckedUpdateManyInput, {nullable:false})
    @Type(() => SuperContestCombosUncheckedUpdateManyInput)
    data!: Identity<SuperContestCombosUncheckedUpdateManyInput>;

    @Field(() => SuperContestCombosWhereInput, {nullable:true})
    @Type(() => SuperContestCombosWhereInput)
    where?: Identity<SuperContestCombosWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
