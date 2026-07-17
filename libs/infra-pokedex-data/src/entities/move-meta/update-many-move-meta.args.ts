import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveMetaUpdateManyMutationInput } from './move-meta-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MoveMetaWhereInput } from './move-meta-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyMoveMetaArgs {

    @Field(() => MoveMetaUpdateManyMutationInput, {nullable:false})
    @Type(() => MoveMetaUpdateManyMutationInput)
    data!: MoveMetaUpdateManyMutationInput;

    @Field(() => MoveMetaWhereInput, {nullable:true})
    @Type(() => MoveMetaWhereInput)
    where?: MoveMetaWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
