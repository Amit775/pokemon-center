import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaWhereInput } from './move-meta-where.input';

@InputType()
export class MoveMetaScalarRelationFilter {

    @Field(() => MoveMetaWhereInput, {nullable:true})
    is?: MoveMetaWhereInput;

    @Field(() => MoveMetaWhereInput, {nullable:true})
    isNot?: MoveMetaWhereInput;
}
