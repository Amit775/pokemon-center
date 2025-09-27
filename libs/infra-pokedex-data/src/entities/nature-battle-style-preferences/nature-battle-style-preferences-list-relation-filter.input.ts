import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NatureBattleStylePreferencesWhereInput } from './nature-battle-style-preferences-where.input';

@InputType()
export class NatureBattleStylePreferencesListRelationFilter {

    @Field(() => NatureBattleStylePreferencesWhereInput, {nullable:true})
    every?: NatureBattleStylePreferencesWhereInput;

    @Field(() => NatureBattleStylePreferencesWhereInput, {nullable:true})
    some?: NatureBattleStylePreferencesWhereInput;

    @Field(() => NatureBattleStylePreferencesWhereInput, {nullable:true})
    none?: NatureBattleStylePreferencesWhereInput;
}
