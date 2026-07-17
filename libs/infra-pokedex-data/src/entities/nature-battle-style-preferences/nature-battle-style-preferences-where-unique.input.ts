import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NatureBattleStylePreferencesWhereInput } from './nature-battle-style-preferences-where.input';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { NaturesScalarRelationFilter } from '../natures/natures-scalar-relation-filter.input';
import { MoveBattleStylesScalarRelationFilter } from '../move-battle-styles/move-battle-styles-scalar-relation-filter.input';

@InputType()
export class NatureBattleStylePreferencesWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    nature_id?: number;

    @Field(() => [NatureBattleStylePreferencesWhereInput], {nullable:true})
    AND?: Array<NatureBattleStylePreferencesWhereInput>;

    @Field(() => [NatureBattleStylePreferencesWhereInput], {nullable:true})
    OR?: Array<NatureBattleStylePreferencesWhereInput>;

    @Field(() => [NatureBattleStylePreferencesWhereInput], {nullable:true})
    NOT?: Array<NatureBattleStylePreferencesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_battle_style_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    low_hp_preference?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    high_hp_preference?: Identity<IntFilter>;

    @Field(() => NaturesScalarRelationFilter, {nullable:true})
    nature?: Identity<NaturesScalarRelationFilter>;

    @Field(() => MoveBattleStylesScalarRelationFilter, {nullable:true})
    battleStyle?: Identity<MoveBattleStylesScalarRelationFilter>;
}
