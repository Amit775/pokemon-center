import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveFlagsWhereInput } from './move-flags-where.input';

@InputType()
export class MoveFlagsScalarRelationFilter {

    @Field(() => MoveFlagsWhereInput, {nullable:true})
    is?: MoveFlagsWhereInput;

    @Field(() => MoveFlagsWhereInput, {nullable:true})
    isNot?: MoveFlagsWhereInput;
}
