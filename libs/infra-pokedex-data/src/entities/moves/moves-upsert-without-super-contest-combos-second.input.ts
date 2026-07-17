import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUpdateWithoutSuperContestCombosSecondInput } from './moves-update-without-super-contest-combos-second.input';
import { Type } from 'class-transformer';
import { MovesCreateWithoutSuperContestCombosSecondInput } from './moves-create-without-super-contest-combos-second.input';
import { MovesWhereInput } from './moves-where.input';

@InputType()
export class MovesUpsertWithoutSuperContestCombosSecondInput {

    @Field(() => MovesUpdateWithoutSuperContestCombosSecondInput, {nullable:false})
    @Type(() => MovesUpdateWithoutSuperContestCombosSecondInput)
    update!: Identity<MovesUpdateWithoutSuperContestCombosSecondInput>;

    @Field(() => MovesCreateWithoutSuperContestCombosSecondInput, {nullable:false})
    @Type(() => MovesCreateWithoutSuperContestCombosSecondInput)
    create!: Identity<MovesCreateWithoutSuperContestCombosSecondInput>;

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: Identity<MovesWhereInput>;
}
