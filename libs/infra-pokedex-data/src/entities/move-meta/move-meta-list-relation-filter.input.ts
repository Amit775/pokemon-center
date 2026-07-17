import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaWhereInput } from './move-meta-where.input';

@InputType()
export class MoveMetaListRelationFilter {

    @Field(() => MoveMetaWhereInput, {nullable:true})
    every?: Identity<MoveMetaWhereInput>;

    @Field(() => MoveMetaWhereInput, {nullable:true})
    some?: Identity<MoveMetaWhereInput>;

    @Field(() => MoveMetaWhereInput, {nullable:true})
    none?: Identity<MoveMetaWhereInput>;
}
