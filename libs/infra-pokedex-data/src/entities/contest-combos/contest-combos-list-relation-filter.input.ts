import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestCombosWhereInput } from './contest-combos-where.input';

@InputType()
export class ContestCombosListRelationFilter {

    @Field(() => ContestCombosWhereInput, {nullable:true})
    every?: Identity<ContestCombosWhereInput>;

    @Field(() => ContestCombosWhereInput, {nullable:true})
    some?: Identity<ContestCombosWhereInput>;

    @Field(() => ContestCombosWhereInput, {nullable:true})
    none?: Identity<ContestCombosWhereInput>;
}
