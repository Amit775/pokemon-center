import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesWhereInput } from './moves-where.input';

@InputType()
export class MovesScalarRelationFilter {

    @Field(() => MovesWhereInput, {nullable:true})
    is?: Identity<MovesWhereInput>;

    @Field(() => MovesWhereInput, {nullable:true})
    isNot?: Identity<MovesWhereInput>;
}
