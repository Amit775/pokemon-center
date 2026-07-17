import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaWhereInput } from './move-meta-where.input';

@InputType()
export class MoveMetaScalarRelationFilter {

    @Field(() => MoveMetaWhereInput, {nullable:true})
    is?: Identity<MoveMetaWhereInput>;

    @Field(() => MoveMetaWhereInput, {nullable:true})
    isNot?: Identity<MoveMetaWhereInput>;
}
