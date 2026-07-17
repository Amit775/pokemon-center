import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesWhereInput } from './moves-where.input';
import { Type } from 'class-transformer';
import { MovesUpdateWithoutContestCombosSecondInput } from './moves-update-without-contest-combos-second.input';

@InputType()
export class MovesUpdateToOneWithWhereWithoutContestCombosSecondInput {

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: MovesWhereInput;

    @Field(() => MovesUpdateWithoutContestCombosSecondInput, {nullable:false})
    @Type(() => MovesUpdateWithoutContestCombosSecondInput)
    data!: MovesUpdateWithoutContestCombosSecondInput;
}
