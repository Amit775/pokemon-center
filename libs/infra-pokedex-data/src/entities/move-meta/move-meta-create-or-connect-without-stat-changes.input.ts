import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MoveMetaWhereUniqueInput } from './move-meta-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MoveMetaCreateWithoutStatChangesInput } from './move-meta-create-without-stat-changes.input';

@InputType()
export class MoveMetaCreateOrConnectWithoutStatChangesInput {

    @Field(() => MoveMetaWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>;

    @Field(() => MoveMetaCreateWithoutStatChangesInput, {nullable:false})
    @Type(() => MoveMetaCreateWithoutStatChangesInput)
    create!: Identity<MoveMetaCreateWithoutStatChangesInput>;
}
