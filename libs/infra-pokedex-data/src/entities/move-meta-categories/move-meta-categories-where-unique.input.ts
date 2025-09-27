import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MoveMetaCategoriesWhereInput } from './move-meta-categories-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { MoveMetaListRelationFilter } from '../move-meta/move-meta-list-relation-filter.input';

@InputType()
export class MoveMetaCategoriesWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [MoveMetaCategoriesWhereInput], {nullable:true})
    AND?: Array<MoveMetaCategoriesWhereInput>;

    @Field(() => [MoveMetaCategoriesWhereInput], {nullable:true})
    OR?: Array<MoveMetaCategoriesWhereInput>;

    @Field(() => [MoveMetaCategoriesWhereInput], {nullable:true})
    NOT?: Array<MoveMetaCategoriesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => MoveMetaListRelationFilter, {nullable:true})
    meta?: MoveMetaListRelationFilter;
}
