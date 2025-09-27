import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { MovesListRelationFilter } from '../moves/moves-list-relation-filter.input';
import { TypesListRelationFilter } from '../types/types-list-relation-filter.input';

@InputType()
export class MoveDamageClassesWhereInput {

    @Field(() => [MoveDamageClassesWhereInput], {nullable:true})
    AND?: Array<MoveDamageClassesWhereInput>;

    @Field(() => [MoveDamageClassesWhereInput], {nullable:true})
    OR?: Array<MoveDamageClassesWhereInput>;

    @Field(() => [MoveDamageClassesWhereInput], {nullable:true})
    NOT?: Array<MoveDamageClassesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => MovesListRelationFilter, {nullable:true})
    moves?: MovesListRelationFilter;

    @Field(() => TypesListRelationFilter, {nullable:true})
    types?: TypesListRelationFilter;
}
