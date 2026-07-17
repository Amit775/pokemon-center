import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesUpdateWithoutContestCombosInput } from './moves-update-without-contest-combos.input';
import { Type } from 'class-transformer';
import { MovesCreateWithoutContestCombosInput } from './moves-create-without-contest-combos.input';
import { MovesWhereInput } from './moves-where.input';

@InputType()
export class MovesUpsertWithoutContestCombosInput {

    @Field(() => MovesUpdateWithoutContestCombosInput, {nullable:false})
    @Type(() => MovesUpdateWithoutContestCombosInput)
    update!: MovesUpdateWithoutContestCombosInput;

    @Field(() => MovesCreateWithoutContestCombosInput, {nullable:false})
    @Type(() => MovesCreateWithoutContestCombosInput)
    create!: MovesCreateWithoutContestCombosInput;

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: MovesWhereInput;
}
