import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { SuperContestCombosScalarWhereInput } from './super-contest-combos-scalar-where.input';
import { Type } from 'class-transformer';
import { SuperContestCombosUncheckedUpdateManyWithoutFirstMoveInput } from './super-contest-combos-unchecked-update-many-without-first-move.input';

@InputType()
export class SuperContestCombosUpdateManyWithWhereWithoutFirstMoveInput {

    @Field(() => SuperContestCombosScalarWhereInput, {nullable:false})
    @Type(() => SuperContestCombosScalarWhereInput)
    where!: Identity<SuperContestCombosScalarWhereInput>;

    @Field(() => SuperContestCombosUncheckedUpdateManyWithoutFirstMoveInput, {nullable:false})
    @Type(() => SuperContestCombosUncheckedUpdateManyWithoutFirstMoveInput)
    data!: Identity<SuperContestCombosUncheckedUpdateManyWithoutFirstMoveInput>;
}
