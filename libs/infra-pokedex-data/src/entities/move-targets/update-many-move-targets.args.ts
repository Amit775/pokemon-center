import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveTargetsUpdateManyMutationInput } from './move-targets-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MoveTargetsWhereInput } from './move-targets-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyMoveTargetsArgs {

    @Field(() => MoveTargetsUpdateManyMutationInput, {nullable:false})
    @Type(() => MoveTargetsUpdateManyMutationInput)
    data!: MoveTargetsUpdateManyMutationInput;

    @Field(() => MoveTargetsWhereInput, {nullable:true})
    @Type(() => MoveTargetsWhereInput)
    where?: MoveTargetsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
