import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUpdateManyWithoutTargetNestedInput } from '../moves/moves-update-many-without-target-nested.input';

@InputType()
export class MoveTargetsUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => MovesUpdateManyWithoutTargetNestedInput, {nullable:true})
    moves?: Identity<MovesUpdateManyWithoutTargetNestedInput>;
}
