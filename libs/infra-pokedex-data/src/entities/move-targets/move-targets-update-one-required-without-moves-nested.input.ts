import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveTargetsCreateWithoutMovesInput } from './move-targets-create-without-moves.input';
import { Type } from 'class-transformer';
import { MoveTargetsCreateOrConnectWithoutMovesInput } from './move-targets-create-or-connect-without-moves.input';
import { MoveTargetsUpsertWithoutMovesInput } from './move-targets-upsert-without-moves.input';
import { Prisma } from '@prisma/client';
import { MoveTargetsWhereUniqueInput } from './move-targets-where-unique.input';
import { MoveTargetsUpdateToOneWithWhereWithoutMovesInput } from './move-targets-update-to-one-with-where-without-moves.input';

@InputType()
export class MoveTargetsUpdateOneRequiredWithoutMovesNestedInput {

    @Field(() => MoveTargetsCreateWithoutMovesInput, {nullable:true})
    @Type(() => MoveTargetsCreateWithoutMovesInput)
    create?: MoveTargetsCreateWithoutMovesInput;

    @Field(() => MoveTargetsCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => MoveTargetsCreateOrConnectWithoutMovesInput)
    connectOrCreate?: MoveTargetsCreateOrConnectWithoutMovesInput;

    @Field(() => MoveTargetsUpsertWithoutMovesInput, {nullable:true})
    @Type(() => MoveTargetsUpsertWithoutMovesInput)
    upsert?: MoveTargetsUpsertWithoutMovesInput;

    @Field(() => MoveTargetsWhereUniqueInput, {nullable:true})
    @Type(() => MoveTargetsWhereUniqueInput)
    connect?: Prisma.AtLeast<MoveTargetsWhereUniqueInput, 'id'>;

    @Field(() => MoveTargetsUpdateToOneWithWhereWithoutMovesInput, {nullable:true})
    @Type(() => MoveTargetsUpdateToOneWithWhereWithoutMovesInput)
    update?: MoveTargetsUpdateToOneWithWhereWithoutMovesInput;
}
