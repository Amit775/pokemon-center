import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveBattleStylesWhereInput } from './move-battle-styles-where.input';
import { Type } from 'class-transformer';
import { MoveBattleStylesUpdateWithoutNaturePreferencesInput } from './move-battle-styles-update-without-nature-preferences.input';

@InputType()
export class MoveBattleStylesUpdateToOneWithWhereWithoutNaturePreferencesInput {

    @Field(() => MoveBattleStylesWhereInput, {nullable:true})
    @Type(() => MoveBattleStylesWhereInput)
    where?: MoveBattleStylesWhereInput;

    @Field(() => MoveBattleStylesUpdateWithoutNaturePreferencesInput, {nullable:false})
    @Type(() => MoveBattleStylesUpdateWithoutNaturePreferencesInput)
    data!: MoveBattleStylesUpdateWithoutNaturePreferencesInput;
}
