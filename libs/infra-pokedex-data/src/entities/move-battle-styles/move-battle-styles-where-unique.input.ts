import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MoveBattleStylesWhereInput } from './move-battle-styles-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { NatureBattleStylePreferencesListRelationFilter } from '../nature-battle-style-preferences/nature-battle-style-preferences-list-relation-filter.input';

@InputType()
export class MoveBattleStylesWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [MoveBattleStylesWhereInput], {nullable:true})
    AND?: Array<MoveBattleStylesWhereInput>;

    @Field(() => [MoveBattleStylesWhereInput], {nullable:true})
    OR?: Array<MoveBattleStylesWhereInput>;

    @Field(() => [MoveBattleStylesWhereInput], {nullable:true})
    NOT?: Array<MoveBattleStylesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => NatureBattleStylePreferencesListRelationFilter, {nullable:true})
    naturePreferences?: NatureBattleStylePreferencesListRelationFilter;
}
