import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MoveDamageClassesWhereInput } from './move-damage-classes-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { MovesListRelationFilter } from '../moves/moves-list-relation-filter.input';
import { TypesListRelationFilter } from '../types/types-list-relation-filter.input';

@InputType()
export class MoveDamageClassesWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [MoveDamageClassesWhereInput], {nullable:true})
    AND?: Array<MoveDamageClassesWhereInput>;

    @Field(() => [MoveDamageClassesWhereInput], {nullable:true})
    OR?: Array<MoveDamageClassesWhereInput>;

    @Field(() => [MoveDamageClassesWhereInput], {nullable:true})
    NOT?: Array<MoveDamageClassesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => MovesListRelationFilter, {nullable:true})
    moves?: MovesListRelationFilter;

    @Field(() => TypesListRelationFilter, {nullable:true})
    types?: TypesListRelationFilter;
}
