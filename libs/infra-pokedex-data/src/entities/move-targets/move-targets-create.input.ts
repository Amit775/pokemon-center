import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MovesCreateNestedManyWithoutTargetInput } from '../moves/moves-create-nested-many-without-target.input';

@InputType()
export class MoveTargetsCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => MovesCreateNestedManyWithoutTargetInput, {nullable:true})
    moves?: MovesCreateNestedManyWithoutTargetInput;
}
