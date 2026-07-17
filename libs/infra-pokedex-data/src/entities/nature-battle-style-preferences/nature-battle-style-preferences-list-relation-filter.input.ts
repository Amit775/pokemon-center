import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NatureBattleStylePreferencesWhereInput } from './nature-battle-style-preferences-where.input';

@InputType()
export class NatureBattleStylePreferencesListRelationFilter {

    @Field(() => NatureBattleStylePreferencesWhereInput, {nullable:true})
    every?: Identity<NatureBattleStylePreferencesWhereInput>;

    @Field(() => NatureBattleStylePreferencesWhereInput, {nullable:true})
    some?: Identity<NatureBattleStylePreferencesWhereInput>;

    @Field(() => NatureBattleStylePreferencesWhereInput, {nullable:true})
    none?: Identity<NatureBattleStylePreferencesWhereInput>;
}
