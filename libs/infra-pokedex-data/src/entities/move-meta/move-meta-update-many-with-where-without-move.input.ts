import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaScalarWhereInput } from './move-meta-scalar-where.input';
import { Type } from 'class-transformer';
import { MoveMetaUpdateManyMutationInput } from './move-meta-update-many-mutation.input';

@InputType()
export class MoveMetaUpdateManyWithWhereWithoutMoveInput {

    @Field(() => MoveMetaScalarWhereInput, {nullable:false})
    @Type(() => MoveMetaScalarWhereInput)
    where!: MoveMetaScalarWhereInput;

    @Field(() => MoveMetaUpdateManyMutationInput, {nullable:false})
    @Type(() => MoveMetaUpdateManyMutationInput)
    data!: MoveMetaUpdateManyMutationInput;
}
