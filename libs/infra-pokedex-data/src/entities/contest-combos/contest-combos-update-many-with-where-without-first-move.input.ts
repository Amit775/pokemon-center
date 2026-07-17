import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestCombosScalarWhereInput } from './contest-combos-scalar-where.input';
import { Type } from 'class-transformer';
import { ContestCombosUncheckedUpdateManyWithoutFirstMoveInput } from './contest-combos-unchecked-update-many-without-first-move.input';

@InputType()
export class ContestCombosUpdateManyWithWhereWithoutFirstMoveInput {

    @Field(() => ContestCombosScalarWhereInput, {nullable:false})
    @Type(() => ContestCombosScalarWhereInput)
    where!: ContestCombosScalarWhereInput;

    @Field(() => ContestCombosUncheckedUpdateManyWithoutFirstMoveInput, {nullable:false})
    @Type(() => ContestCombosUncheckedUpdateManyWithoutFirstMoveInput)
    data!: ContestCombosUncheckedUpdateManyWithoutFirstMoveInput;
}
