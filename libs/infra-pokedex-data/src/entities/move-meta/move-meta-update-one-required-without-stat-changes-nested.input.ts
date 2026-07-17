import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaCreateWithoutStatChangesInput } from './move-meta-create-without-stat-changes.input';
import { Type } from 'class-transformer';
import { MoveMetaCreateOrConnectWithoutStatChangesInput } from './move-meta-create-or-connect-without-stat-changes.input';
import { MoveMetaUpsertWithoutStatChangesInput } from './move-meta-upsert-without-stat-changes.input';
import { Prisma } from '@prisma/client';
import { MoveMetaWhereUniqueInput } from './move-meta-where-unique.input';
import { MoveMetaUpdateToOneWithWhereWithoutStatChangesInput } from './move-meta-update-to-one-with-where-without-stat-changes.input';

@InputType()
export class MoveMetaUpdateOneRequiredWithoutStatChangesNestedInput {

    @Field(() => MoveMetaCreateWithoutStatChangesInput, {nullable:true})
    @Type(() => MoveMetaCreateWithoutStatChangesInput)
    create?: MoveMetaCreateWithoutStatChangesInput;

    @Field(() => MoveMetaCreateOrConnectWithoutStatChangesInput, {nullable:true})
    @Type(() => MoveMetaCreateOrConnectWithoutStatChangesInput)
    connectOrCreate?: MoveMetaCreateOrConnectWithoutStatChangesInput;

    @Field(() => MoveMetaUpsertWithoutStatChangesInput, {nullable:true})
    @Type(() => MoveMetaUpsertWithoutStatChangesInput)
    upsert?: MoveMetaUpsertWithoutStatChangesInput;

    @Field(() => MoveMetaWhereUniqueInput, {nullable:true})
    @Type(() => MoveMetaWhereUniqueInput)
    connect?: Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>;

    @Field(() => MoveMetaUpdateToOneWithWhereWithoutStatChangesInput, {nullable:true})
    @Type(() => MoveMetaUpdateToOneWithWhereWithoutStatChangesInput)
    update?: MoveMetaUpdateToOneWithWhereWithoutStatChangesInput;
}
