import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MoveMetaWhereUniqueInput } from './move-meta-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MoveMetaUpdateWithoutMoveInput } from './move-meta-update-without-move.input';

@InputType()
export class MoveMetaUpdateWithWhereUniqueWithoutMoveInput {

    @Field(() => MoveMetaWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>;

    @Field(() => MoveMetaUpdateWithoutMoveInput, {nullable:false})
    @Type(() => MoveMetaUpdateWithoutMoveInput)
    data!: Identity<MoveMetaUpdateWithoutMoveInput>;
}
