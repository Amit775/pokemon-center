import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaWhereInput } from './move-meta-where.input';

@InputType()
export class MoveMetaListRelationFilter {

    @Field(() => MoveMetaWhereInput, {nullable:true})
    every?: MoveMetaWhereInput;

    @Field(() => MoveMetaWhereInput, {nullable:true})
    some?: MoveMetaWhereInput;

    @Field(() => MoveMetaWhereInput, {nullable:true})
    none?: MoveMetaWhereInput;
}
