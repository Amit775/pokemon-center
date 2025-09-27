import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SuperContestCombosWhereInput } from './super-contest-combos-where.input';

@InputType()
export class SuperContestCombosListRelationFilter {

    @Field(() => SuperContestCombosWhereInput, {nullable:true})
    every?: SuperContestCombosWhereInput;

    @Field(() => SuperContestCombosWhereInput, {nullable:true})
    some?: SuperContestCombosWhereInput;

    @Field(() => SuperContestCombosWhereInput, {nullable:true})
    none?: SuperContestCombosWhereInput;
}
