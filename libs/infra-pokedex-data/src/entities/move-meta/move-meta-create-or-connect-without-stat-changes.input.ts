import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoveMetaWhereUniqueInput } from './move-meta-where-unique.input';
import { Type } from 'class-transformer';
import { MoveMetaCreateWithoutStatChangesInput } from './move-meta-create-without-stat-changes.input';

@InputType()
export class MoveMetaCreateOrConnectWithoutStatChangesInput {

    @Field(() => MoveMetaWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>;

    @Field(() => MoveMetaCreateWithoutStatChangesInput, {nullable:false})
    @Type(() => MoveMetaCreateWithoutStatChangesInput)
    create!: MoveMetaCreateWithoutStatChangesInput;
}
