import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveTargetsWhereInput } from './move-targets-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyMoveTargetsArgs {

    @Field(() => MoveTargetsWhereInput, {nullable:true})
    @Type(() => MoveTargetsWhereInput)
    where?: MoveTargetsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
