import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { NatureBattleStylePreferencesListRelationFilter } from '../nature-battle-style-preferences/nature-battle-style-preferences-list-relation-filter.input';

@InputType()
export class MoveBattleStylesWhereInput {

    @Field(() => [MoveBattleStylesWhereInput], {nullable:true})
    AND?: Array<MoveBattleStylesWhereInput>;

    @Field(() => [MoveBattleStylesWhereInput], {nullable:true})
    OR?: Array<MoveBattleStylesWhereInput>;

    @Field(() => [MoveBattleStylesWhereInput], {nullable:true})
    NOT?: Array<MoveBattleStylesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => NatureBattleStylePreferencesListRelationFilter, {nullable:true})
    naturePreferences?: Identity<NatureBattleStylePreferencesListRelationFilter>;
}
