import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoveBattleStylesWhereUniqueInput } from './move-battle-styles-where-unique.input';
import { Type } from 'class-transformer';
import { MoveBattleStylesCreateWithoutNaturePreferencesInput } from './move-battle-styles-create-without-nature-preferences.input';

@InputType()
export class MoveBattleStylesCreateOrConnectWithoutNaturePreferencesInput {

    @Field(() => MoveBattleStylesWhereUniqueInput, {nullable:false})
    @Type(() => MoveBattleStylesWhereUniqueInput)
    where!: Prisma.AtLeast<MoveBattleStylesWhereUniqueInput, 'id'>;

    @Field(() => MoveBattleStylesCreateWithoutNaturePreferencesInput, {nullable:false})
    @Type(() => MoveBattleStylesCreateWithoutNaturePreferencesInput)
    create!: MoveBattleStylesCreateWithoutNaturePreferencesInput;
}
