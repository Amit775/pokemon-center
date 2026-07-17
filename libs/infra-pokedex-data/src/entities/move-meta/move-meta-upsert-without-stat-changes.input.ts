import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaUpdateWithoutStatChangesInput } from './move-meta-update-without-stat-changes.input';
import { Type } from 'class-transformer';
import { MoveMetaCreateWithoutStatChangesInput } from './move-meta-create-without-stat-changes.input';
import { MoveMetaWhereInput } from './move-meta-where.input';

@InputType()
export class MoveMetaUpsertWithoutStatChangesInput {

    @Field(() => MoveMetaUpdateWithoutStatChangesInput, {nullable:false})
    @Type(() => MoveMetaUpdateWithoutStatChangesInput)
    update!: MoveMetaUpdateWithoutStatChangesInput;

    @Field(() => MoveMetaCreateWithoutStatChangesInput, {nullable:false})
    @Type(() => MoveMetaCreateWithoutStatChangesInput)
    create!: MoveMetaCreateWithoutStatChangesInput;

    @Field(() => MoveMetaWhereInput, {nullable:true})
    @Type(() => MoveMetaWhereInput)
    where?: MoveMetaWhereInput;
}
