import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestCombosScalarWhereInput } from './contest-combos-scalar-where.input';
import { Type } from 'class-transformer';
import { ContestCombosUncheckedUpdateManyWithoutSecondMoveInput } from './contest-combos-unchecked-update-many-without-second-move.input';

@InputType()
export class ContestCombosUpdateManyWithWhereWithoutSecondMoveInput {

    @Field(() => ContestCombosScalarWhereInput, {nullable:false})
    @Type(() => ContestCombosScalarWhereInput)
    where!: ContestCombosScalarWhereInput;

    @Field(() => ContestCombosUncheckedUpdateManyWithoutSecondMoveInput, {nullable:false})
    @Type(() => ContestCombosUncheckedUpdateManyWithoutSecondMoveInput)
    data!: ContestCombosUncheckedUpdateManyWithoutSecondMoveInput;
}
