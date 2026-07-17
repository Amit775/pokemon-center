import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SuperContestCombosCreateWithoutFirstMoveInput } from './super-contest-combos-create-without-first-move.input';
import { Type } from 'class-transformer';
import { SuperContestCombosCreateOrConnectWithoutFirstMoveInput } from './super-contest-combos-create-or-connect-without-first-move.input';
import type { Identity } from 'identity-type';
import { SuperContestCombosCreateManyFirstMoveInputEnvelope } from './super-contest-combos-create-many-first-move-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { SuperContestCombosWhereUniqueInput } from './super-contest-combos-where-unique.input';

@InputType()
export class SuperContestCombosUncheckedCreateNestedManyWithoutFirstMoveInput {

    @Field(() => [SuperContestCombosCreateWithoutFirstMoveInput], {nullable:true})
    @Type(() => SuperContestCombosCreateWithoutFirstMoveInput)
    create?: Array<SuperContestCombosCreateWithoutFirstMoveInput>;

    @Field(() => [SuperContestCombosCreateOrConnectWithoutFirstMoveInput], {nullable:true})
    @Type(() => SuperContestCombosCreateOrConnectWithoutFirstMoveInput)
    connectOrCreate?: Array<SuperContestCombosCreateOrConnectWithoutFirstMoveInput>;

    @Field(() => SuperContestCombosCreateManyFirstMoveInputEnvelope, {nullable:true})
    @Type(() => SuperContestCombosCreateManyFirstMoveInputEnvelope)
    createMany?: Identity<SuperContestCombosCreateManyFirstMoveInputEnvelope>;

    @Field(() => [SuperContestCombosWhereUniqueInput], {nullable:true})
    @Type(() => SuperContestCombosWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SuperContestCombosWhereUniqueInput, 'first_move_id'>>;
}
