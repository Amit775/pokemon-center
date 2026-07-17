import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MovesUncheckedCreateNestedManyWithoutTargetInput } from '../moves/moves-unchecked-create-nested-many-without-target.input';

@InputType()
export class MoveTargetsUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => MovesUncheckedCreateNestedManyWithoutTargetInput, {nullable:true})
    moves?: MovesUncheckedCreateNestedManyWithoutTargetInput;
}
