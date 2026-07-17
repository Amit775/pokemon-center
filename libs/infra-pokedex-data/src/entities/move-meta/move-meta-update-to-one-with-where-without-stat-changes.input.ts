import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaWhereInput } from './move-meta-where.input';
import { Type } from 'class-transformer';
import { MoveMetaUpdateWithoutStatChangesInput } from './move-meta-update-without-stat-changes.input';

@InputType()
export class MoveMetaUpdateToOneWithWhereWithoutStatChangesInput {

    @Field(() => MoveMetaWhereInput, {nullable:true})
    @Type(() => MoveMetaWhereInput)
    where?: Identity<MoveMetaWhereInput>;

    @Field(() => MoveMetaUpdateWithoutStatChangesInput, {nullable:false})
    @Type(() => MoveMetaUpdateWithoutStatChangesInput)
    data!: Identity<MoveMetaUpdateWithoutStatChangesInput>;
}
