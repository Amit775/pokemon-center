import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsWhereInput } from './generations-where.input';

@InputType()
export class GenerationsListRelationFilter {

    @Field(() => GenerationsWhereInput, {nullable:true})
    every?: Identity<GenerationsWhereInput>;

    @Field(() => GenerationsWhereInput, {nullable:true})
    some?: Identity<GenerationsWhereInput>;

    @Field(() => GenerationsWhereInput, {nullable:true})
    none?: Identity<GenerationsWhereInput>;
}
