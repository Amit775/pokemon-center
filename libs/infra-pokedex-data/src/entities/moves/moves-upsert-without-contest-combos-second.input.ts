import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesUpdateWithoutContestCombosSecondInput } from './moves-update-without-contest-combos-second.input';
import { Type } from 'class-transformer';
import { MovesCreateWithoutContestCombosSecondInput } from './moves-create-without-contest-combos-second.input';
import { MovesWhereInput } from './moves-where.input';

@InputType()
export class MovesUpsertWithoutContestCombosSecondInput {

    @Field(() => MovesUpdateWithoutContestCombosSecondInput, {nullable:false})
    @Type(() => MovesUpdateWithoutContestCombosSecondInput)
    update!: MovesUpdateWithoutContestCombosSecondInput;

    @Field(() => MovesCreateWithoutContestCombosSecondInput, {nullable:false})
    @Type(() => MovesCreateWithoutContestCombosSecondInput)
    create!: MovesCreateWithoutContestCombosSecondInput;

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: MovesWhereInput;
}
