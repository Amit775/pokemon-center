import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveTargetsCreateWithoutMovesInput } from './move-targets-create-without-moves.input';
import { Type } from 'class-transformer';
import { MoveTargetsCreateOrConnectWithoutMovesInput } from './move-targets-create-or-connect-without-moves.input';
import { MoveTargetsUpsertWithoutMovesInput } from './move-targets-upsert-without-moves.input';
import { Prisma } from '@pokemon-center/prisma';
import { MoveTargetsWhereUniqueInput } from './move-targets-where-unique.input';
import { MoveTargetsUpdateToOneWithWhereWithoutMovesInput } from './move-targets-update-to-one-with-where-without-moves.input';

@InputType()
export class MoveTargetsUpdateOneRequiredWithoutMovesNestedInput {

    @Field(() => MoveTargetsCreateWithoutMovesInput, {nullable:true})
    @Type(() => MoveTargetsCreateWithoutMovesInput)
    create?: Identity<MoveTargetsCreateWithoutMovesInput>;

    @Field(() => MoveTargetsCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => MoveTargetsCreateOrConnectWithoutMovesInput)
    connectOrCreate?: Identity<MoveTargetsCreateOrConnectWithoutMovesInput>;

    @Field(() => MoveTargetsUpsertWithoutMovesInput, {nullable:true})
    @Type(() => MoveTargetsUpsertWithoutMovesInput)
    upsert?: Identity<MoveTargetsUpsertWithoutMovesInput>;

    @Field(() => MoveTargetsWhereUniqueInput, {nullable:true})
    @Type(() => MoveTargetsWhereUniqueInput)
    connect?: Prisma.AtLeast<MoveTargetsWhereUniqueInput, 'id'>;

    @Field(() => MoveTargetsUpdateToOneWithWhereWithoutMovesInput, {nullable:true})
    @Type(() => MoveTargetsUpdateToOneWithWhereWithoutMovesInput)
    update?: Identity<MoveTargetsUpdateToOneWithWhereWithoutMovesInput>;
}
