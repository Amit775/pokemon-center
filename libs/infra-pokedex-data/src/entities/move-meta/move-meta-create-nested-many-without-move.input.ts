import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaCreateWithoutMoveInput } from './move-meta-create-without-move.input';
import { Type } from 'class-transformer';
import { MoveMetaCreateOrConnectWithoutMoveInput } from './move-meta-create-or-connect-without-move.input';
import { MoveMetaCreateManyMoveInputEnvelope } from './move-meta-create-many-move-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MoveMetaWhereUniqueInput } from './move-meta-where-unique.input';

@InputType()
export class MoveMetaCreateNestedManyWithoutMoveInput {

    @Field(() => [MoveMetaCreateWithoutMoveInput], {nullable:true})
    @Type(() => MoveMetaCreateWithoutMoveInput)
    create?: Array<MoveMetaCreateWithoutMoveInput>;

    @Field(() => [MoveMetaCreateOrConnectWithoutMoveInput], {nullable:true})
    @Type(() => MoveMetaCreateOrConnectWithoutMoveInput)
    connectOrCreate?: Array<MoveMetaCreateOrConnectWithoutMoveInput>;

    @Field(() => MoveMetaCreateManyMoveInputEnvelope, {nullable:true})
    @Type(() => MoveMetaCreateManyMoveInputEnvelope)
    createMany?: MoveMetaCreateManyMoveInputEnvelope;

    @Field(() => [MoveMetaWhereUniqueInput], {nullable:true})
    @Type(() => MoveMetaWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>>;
}
