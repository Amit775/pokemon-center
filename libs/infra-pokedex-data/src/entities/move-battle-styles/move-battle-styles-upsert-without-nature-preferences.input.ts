import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveBattleStylesUpdateWithoutNaturePreferencesInput } from './move-battle-styles-update-without-nature-preferences.input';
import { Type } from 'class-transformer';
import { MoveBattleStylesCreateWithoutNaturePreferencesInput } from './move-battle-styles-create-without-nature-preferences.input';
import { MoveBattleStylesWhereInput } from './move-battle-styles-where.input';

@InputType()
export class MoveBattleStylesUpsertWithoutNaturePreferencesInput {

    @Field(() => MoveBattleStylesUpdateWithoutNaturePreferencesInput, {nullable:false})
    @Type(() => MoveBattleStylesUpdateWithoutNaturePreferencesInput)
    update!: MoveBattleStylesUpdateWithoutNaturePreferencesInput;

    @Field(() => MoveBattleStylesCreateWithoutNaturePreferencesInput, {nullable:false})
    @Type(() => MoveBattleStylesCreateWithoutNaturePreferencesInput)
    create!: MoveBattleStylesCreateWithoutNaturePreferencesInput;

    @Field(() => MoveBattleStylesWhereInput, {nullable:true})
    @Type(() => MoveBattleStylesWhereInput)
    where?: MoveBattleStylesWhereInput;
}
