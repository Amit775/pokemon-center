import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { MoveMetaListRelationFilter } from '../move-meta/move-meta-list-relation-filter.input';

@InputType()
export class MoveMetaCategoriesWhereInput {

    @Field(() => [MoveMetaCategoriesWhereInput], {nullable:true})
    AND?: Array<MoveMetaCategoriesWhereInput>;

    @Field(() => [MoveMetaCategoriesWhereInput], {nullable:true})
    OR?: Array<MoveMetaCategoriesWhereInput>;

    @Field(() => [MoveMetaCategoriesWhereInput], {nullable:true})
    NOT?: Array<MoveMetaCategoriesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => MoveMetaListRelationFilter, {nullable:true})
    meta?: Identity<MoveMetaListRelationFilter>;
}
