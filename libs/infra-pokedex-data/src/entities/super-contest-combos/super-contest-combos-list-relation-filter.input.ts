import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { SuperContestCombosWhereInput } from './super-contest-combos-where.input';

@InputType()
export class SuperContestCombosListRelationFilter {

    @Field(() => SuperContestCombosWhereInput, {nullable:true})
    every?: Identity<SuperContestCombosWhereInput>;

    @Field(() => SuperContestCombosWhereInput, {nullable:true})
    some?: Identity<SuperContestCombosWhereInput>;

    @Field(() => SuperContestCombosWhereInput, {nullable:true})
    none?: Identity<SuperContestCombosWhereInput>;
}
