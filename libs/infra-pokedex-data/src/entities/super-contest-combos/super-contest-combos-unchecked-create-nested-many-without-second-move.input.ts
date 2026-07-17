import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SuperContestCombosCreateWithoutSecondMoveInput } from './super-contest-combos-create-without-second-move.input';
import { Type } from 'class-transformer';
import { SuperContestCombosCreateOrConnectWithoutSecondMoveInput } from './super-contest-combos-create-or-connect-without-second-move.input';
import { SuperContestCombosCreateManySecondMoveInputEnvelope } from './super-contest-combos-create-many-second-move-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SuperContestCombosWhereUniqueInput } from './super-contest-combos-where-unique.input';

@InputType()
export class SuperContestCombosUncheckedCreateNestedManyWithoutSecondMoveInput {

    @Field(() => [SuperContestCombosCreateWithoutSecondMoveInput], {nullable:true})
    @Type(() => SuperContestCombosCreateWithoutSecondMoveInput)
    create?: Array<SuperContestCombosCreateWithoutSecondMoveInput>;

    @Field(() => [SuperContestCombosCreateOrConnectWithoutSecondMoveInput], {nullable:true})
    @Type(() => SuperContestCombosCreateOrConnectWithoutSecondMoveInput)
    connectOrCreate?: Array<SuperContestCombosCreateOrConnectWithoutSecondMoveInput>;

    @Field(() => SuperContestCombosCreateManySecondMoveInputEnvelope, {nullable:true})
    @Type(() => SuperContestCombosCreateManySecondMoveInputEnvelope)
    createMany?: SuperContestCombosCreateManySecondMoveInputEnvelope;

    @Field(() => [SuperContestCombosWhereUniqueInput], {nullable:true})
    @Type(() => SuperContestCombosWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SuperContestCombosWhereUniqueInput, 'first_move_id'>>;
}
