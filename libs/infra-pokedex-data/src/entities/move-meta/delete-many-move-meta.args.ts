import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveMetaWhereInput } from './move-meta-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyMoveMetaArgs {

    @Field(() => MoveMetaWhereInput, {nullable:true})
    @Type(() => MoveMetaWhereInput)
    where?: MoveMetaWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
