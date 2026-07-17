import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveTargetsWhereInput } from './move-targets-where.input';

@InputType()
export class MoveTargetsScalarRelationFilter {

    @Field(() => MoveTargetsWhereInput, {nullable:true})
    is?: Identity<MoveTargetsWhereInput>;

    @Field(() => MoveTargetsWhereInput, {nullable:true})
    isNot?: Identity<MoveTargetsWhereInput>;
}
