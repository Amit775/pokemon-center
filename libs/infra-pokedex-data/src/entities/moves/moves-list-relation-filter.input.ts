import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesWhereInput } from './moves-where.input';

@InputType()
export class MovesListRelationFilter {

    @Field(() => MovesWhereInput, {nullable:true})
    every?: Identity<MovesWhereInput>;

    @Field(() => MovesWhereInput, {nullable:true})
    some?: Identity<MovesWhereInput>;

    @Field(() => MovesWhereInput, {nullable:true})
    none?: Identity<MovesWhereInput>;
}
