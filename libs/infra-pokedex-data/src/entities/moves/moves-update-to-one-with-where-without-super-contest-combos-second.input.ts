import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesWhereInput } from './moves-where.input';
import { Type } from 'class-transformer';
import { MovesUpdateWithoutSuperContestCombosSecondInput } from './moves-update-without-super-contest-combos-second.input';

@InputType()
export class MovesUpdateToOneWithWhereWithoutSuperContestCombosSecondInput {

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: Identity<MovesWhereInput>;

    @Field(() => MovesUpdateWithoutSuperContestCombosSecondInput, {nullable:false})
    @Type(() => MovesUpdateWithoutSuperContestCombosSecondInput)
    data!: Identity<MovesUpdateWithoutSuperContestCombosSecondInput>;
}
