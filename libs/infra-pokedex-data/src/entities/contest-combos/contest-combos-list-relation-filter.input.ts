import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestCombosWhereInput } from './contest-combos-where.input';

@InputType()
export class ContestCombosListRelationFilter {

    @Field(() => ContestCombosWhereInput, {nullable:true})
    every?: ContestCombosWhereInput;

    @Field(() => ContestCombosWhereInput, {nullable:true})
    some?: ContestCombosWhereInput;

    @Field(() => ContestCombosWhereInput, {nullable:true})
    none?: ContestCombosWhereInput;
}
