import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesWhereInput } from './moves-where.input';
import { Type } from 'class-transformer';
import { MovesUpdateWithoutContestCombosInput } from './moves-update-without-contest-combos.input';

@InputType()
export class MovesUpdateToOneWithWhereWithoutContestCombosInput {

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: MovesWhereInput;

    @Field(() => MovesUpdateWithoutContestCombosInput, {nullable:false})
    @Type(() => MovesUpdateWithoutContestCombosInput)
    data!: MovesUpdateWithoutContestCombosInput;
}
