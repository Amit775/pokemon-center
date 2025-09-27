import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { NaturesScalarRelationFilter } from '../natures/natures-scalar-relation-filter.input';
import { MoveBattleStylesScalarRelationFilter } from '../move-battle-styles/move-battle-styles-scalar-relation-filter.input';

@InputType()
export class NatureBattleStylePreferencesWhereInput {

    @Field(() => [NatureBattleStylePreferencesWhereInput], {nullable:true})
    AND?: Array<NatureBattleStylePreferencesWhereInput>;

    @Field(() => [NatureBattleStylePreferencesWhereInput], {nullable:true})
    OR?: Array<NatureBattleStylePreferencesWhereInput>;

    @Field(() => [NatureBattleStylePreferencesWhereInput], {nullable:true})
    NOT?: Array<NatureBattleStylePreferencesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    nature_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    move_battle_style_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    low_hp_preference?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    high_hp_preference?: IntFilter;

    @Field(() => NaturesScalarRelationFilter, {nullable:true})
    nature?: NaturesScalarRelationFilter;

    @Field(() => MoveBattleStylesScalarRelationFilter, {nullable:true})
    battleStyle?: MoveBattleStylesScalarRelationFilter;
}
