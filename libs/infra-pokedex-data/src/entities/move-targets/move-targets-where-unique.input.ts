import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MoveTargetsWhereInput } from './move-targets-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { MovesListRelationFilter } from '../moves/moves-list-relation-filter.input';

@InputType()
export class MoveTargetsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [MoveTargetsWhereInput], {nullable:true})
    AND?: Array<MoveTargetsWhereInput>;

    @Field(() => [MoveTargetsWhereInput], {nullable:true})
    OR?: Array<MoveTargetsWhereInput>;

    @Field(() => [MoveTargetsWhereInput], {nullable:true})
    NOT?: Array<MoveTargetsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => MovesListRelationFilter, {nullable:true})
    moves?: MovesListRelationFilter;
}
