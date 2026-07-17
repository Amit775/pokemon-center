import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUpdateWithoutSuperContestCombosInput } from './moves-update-without-super-contest-combos.input';
import { Type } from 'class-transformer';
import { MovesCreateWithoutSuperContestCombosInput } from './moves-create-without-super-contest-combos.input';
import { MovesWhereInput } from './moves-where.input';

@InputType()
export class MovesUpsertWithoutSuperContestCombosInput {

    @Field(() => MovesUpdateWithoutSuperContestCombosInput, {nullable:false})
    @Type(() => MovesUpdateWithoutSuperContestCombosInput)
    update!: Identity<MovesUpdateWithoutSuperContestCombosInput>;

    @Field(() => MovesCreateWithoutSuperContestCombosInput, {nullable:false})
    @Type(() => MovesCreateWithoutSuperContestCombosInput)
    create!: Identity<MovesCreateWithoutSuperContestCombosInput>;

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: Identity<MovesWhereInput>;
}
