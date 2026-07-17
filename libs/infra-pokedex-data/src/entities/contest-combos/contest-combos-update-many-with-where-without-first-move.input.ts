import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestCombosScalarWhereInput } from './contest-combos-scalar-where.input';
import { Type } from 'class-transformer';
import { ContestCombosUncheckedUpdateManyWithoutFirstMoveInput } from './contest-combos-unchecked-update-many-without-first-move.input';

@InputType()
export class ContestCombosUpdateManyWithWhereWithoutFirstMoveInput {

    @Field(() => ContestCombosScalarWhereInput, {nullable:false})
    @Type(() => ContestCombosScalarWhereInput)
    where!: Identity<ContestCombosScalarWhereInput>;

    @Field(() => ContestCombosUncheckedUpdateManyWithoutFirstMoveInput, {nullable:false})
    @Type(() => ContestCombosUncheckedUpdateManyWithoutFirstMoveInput)
    data!: Identity<ContestCombosUncheckedUpdateManyWithoutFirstMoveInput>;
}
