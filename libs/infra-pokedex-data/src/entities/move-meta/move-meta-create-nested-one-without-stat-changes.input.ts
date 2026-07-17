import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaCreateWithoutStatChangesInput } from './move-meta-create-without-stat-changes.input';
import { Type } from 'class-transformer';
import { MoveMetaCreateOrConnectWithoutStatChangesInput } from './move-meta-create-or-connect-without-stat-changes.input';
import { Prisma } from '@pokemon-center/prisma';
import { MoveMetaWhereUniqueInput } from './move-meta-where-unique.input';

@InputType()
export class MoveMetaCreateNestedOneWithoutStatChangesInput {

    @Field(() => MoveMetaCreateWithoutStatChangesInput, {nullable:true})
    @Type(() => MoveMetaCreateWithoutStatChangesInput)
    create?: Identity<MoveMetaCreateWithoutStatChangesInput>;

    @Field(() => MoveMetaCreateOrConnectWithoutStatChangesInput, {nullable:true})
    @Type(() => MoveMetaCreateOrConnectWithoutStatChangesInput)
    connectOrCreate?: Identity<MoveMetaCreateOrConnectWithoutStatChangesInput>;

    @Field(() => MoveMetaWhereUniqueInput, {nullable:true})
    @Type(() => MoveMetaWhereUniqueInput)
    connect?: Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>;
}
