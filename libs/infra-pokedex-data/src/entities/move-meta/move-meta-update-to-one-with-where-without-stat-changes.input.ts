import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaWhereInput } from './move-meta-where.input';
import { Type } from 'class-transformer';
import { MoveMetaUpdateWithoutStatChangesInput } from './move-meta-update-without-stat-changes.input';

@InputType()
export class MoveMetaUpdateToOneWithWhereWithoutStatChangesInput {

    @Field(() => MoveMetaWhereInput, {nullable:true})
    @Type(() => MoveMetaWhereInput)
    where?: MoveMetaWhereInput;

    @Field(() => MoveMetaUpdateWithoutStatChangesInput, {nullable:false})
    @Type(() => MoveMetaUpdateWithoutStatChangesInput)
    data!: MoveMetaUpdateWithoutStatChangesInput;
}
