import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SuperContestCombosScalarWhereInput } from './super-contest-combos-scalar-where.input';
import { Type } from 'class-transformer';
import { SuperContestCombosUncheckedUpdateManyWithoutSecondMoveInput } from './super-contest-combos-unchecked-update-many-without-second-move.input';

@InputType()
export class SuperContestCombosUpdateManyWithWhereWithoutSecondMoveInput {

    @Field(() => SuperContestCombosScalarWhereInput, {nullable:false})
    @Type(() => SuperContestCombosScalarWhereInput)
    where!: SuperContestCombosScalarWhereInput;

    @Field(() => SuperContestCombosUncheckedUpdateManyWithoutSecondMoveInput, {nullable:false})
    @Type(() => SuperContestCombosUncheckedUpdateManyWithoutSecondMoveInput)
    data!: SuperContestCombosUncheckedUpdateManyWithoutSecondMoveInput;
}
