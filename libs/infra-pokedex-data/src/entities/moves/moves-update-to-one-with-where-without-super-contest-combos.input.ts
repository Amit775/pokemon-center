import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesWhereInput } from './moves-where.input';
import { Type } from 'class-transformer';
import { MovesUpdateWithoutSuperContestCombosInput } from './moves-update-without-super-contest-combos.input';

@InputType()
export class MovesUpdateToOneWithWhereWithoutSuperContestCombosInput {

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: Identity<MovesWhereInput>;

    @Field(() => MovesUpdateWithoutSuperContestCombosInput, {nullable:false})
    @Type(() => MovesUpdateWithoutSuperContestCombosInput)
    data!: Identity<MovesUpdateWithoutSuperContestCombosInput>;
}
