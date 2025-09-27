import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveTargetsWhereInput } from './move-targets-where.input';

@InputType()
export class MoveTargetsScalarRelationFilter {

    @Field(() => MoveTargetsWhereInput, {nullable:true})
    is?: MoveTargetsWhereInput;

    @Field(() => MoveTargetsWhereInput, {nullable:true})
    isNot?: MoveTargetsWhereInput;
}
