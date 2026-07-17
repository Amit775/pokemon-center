import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUncheckedUpdateManyWithoutTargetNestedInput } from '../moves/moves-unchecked-update-many-without-target-nested.input';

@InputType()
export class MoveTargetsUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => MovesUncheckedUpdateManyWithoutTargetNestedInput, {nullable:true})
    moves?: Identity<MovesUncheckedUpdateManyWithoutTargetNestedInput>;
}
