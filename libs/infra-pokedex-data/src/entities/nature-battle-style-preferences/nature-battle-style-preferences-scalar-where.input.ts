import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class NatureBattleStylePreferencesScalarWhereInput {

    @Field(() => [NatureBattleStylePreferencesScalarWhereInput], {nullable:true})
    AND?: Array<NatureBattleStylePreferencesScalarWhereInput>;

    @Field(() => [NatureBattleStylePreferencesScalarWhereInput], {nullable:true})
    OR?: Array<NatureBattleStylePreferencesScalarWhereInput>;

    @Field(() => [NatureBattleStylePreferencesScalarWhereInput], {nullable:true})
    NOT?: Array<NatureBattleStylePreferencesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    nature_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    move_battle_style_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    low_hp_preference?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    high_hp_preference?: IntFilter;
}
