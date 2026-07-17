import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MoveMetaWhereUniqueInput } from './move-meta-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MoveMetaCreateWithoutMoveInput } from './move-meta-create-without-move.input';

@InputType()
export class MoveMetaCreateOrConnectWithoutMoveInput {

    @Field(() => MoveMetaWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>;

    @Field(() => MoveMetaCreateWithoutMoveInput, {nullable:false})
    @Type(() => MoveMetaCreateWithoutMoveInput)
    create!: Identity<MoveMetaCreateWithoutMoveInput>;
}
