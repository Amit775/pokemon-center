import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestCombosScalarWhereInput } from './contest-combos-scalar-where.input';
import { Type } from 'class-transformer';
import { ContestCombosUncheckedUpdateManyWithoutSecondMoveInput } from './contest-combos-unchecked-update-many-without-second-move.input';

@InputType()
export class ContestCombosUpdateManyWithWhereWithoutSecondMoveInput {

    @Field(() => ContestCombosScalarWhereInput, {nullable:false})
    @Type(() => ContestCombosScalarWhereInput)
    where!: Identity<ContestCombosScalarWhereInput>;

    @Field(() => ContestCombosUncheckedUpdateManyWithoutSecondMoveInput, {nullable:false})
    @Type(() => ContestCombosUncheckedUpdateManyWithoutSecondMoveInput)
    data!: Identity<ContestCombosUncheckedUpdateManyWithoutSecondMoveInput>;
}
