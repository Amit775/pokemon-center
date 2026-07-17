import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MoveTargetsWhereUniqueInput } from './move-targets-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MoveTargetsCreateWithoutMovesInput } from './move-targets-create-without-moves.input';

@InputType()
export class MoveTargetsCreateOrConnectWithoutMovesInput {

    @Field(() => MoveTargetsWhereUniqueInput, {nullable:false})
    @Type(() => MoveTargetsWhereUniqueInput)
    where!: Prisma.AtLeast<MoveTargetsWhereUniqueInput, 'id'>;

    @Field(() => MoveTargetsCreateWithoutMovesInput, {nullable:false})
    @Type(() => MoveTargetsCreateWithoutMovesInput)
    create!: Identity<MoveTargetsCreateWithoutMovesInput>;
}
