import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveBattleStylesCreateWithoutNaturePreferencesInput } from './move-battle-styles-create-without-nature-preferences.input';
import { Type } from 'class-transformer';
import { MoveBattleStylesCreateOrConnectWithoutNaturePreferencesInput } from './move-battle-styles-create-or-connect-without-nature-preferences.input';
import { Prisma } from '@prisma/client';
import { MoveBattleStylesWhereUniqueInput } from './move-battle-styles-where-unique.input';

@InputType()
export class MoveBattleStylesCreateNestedOneWithoutNaturePreferencesInput {

    @Field(() => MoveBattleStylesCreateWithoutNaturePreferencesInput, {nullable:true})
    @Type(() => MoveBattleStylesCreateWithoutNaturePreferencesInput)
    create?: MoveBattleStylesCreateWithoutNaturePreferencesInput;

    @Field(() => MoveBattleStylesCreateOrConnectWithoutNaturePreferencesInput, {nullable:true})
    @Type(() => MoveBattleStylesCreateOrConnectWithoutNaturePreferencesInput)
    connectOrCreate?: MoveBattleStylesCreateOrConnectWithoutNaturePreferencesInput;

    @Field(() => MoveBattleStylesWhereUniqueInput, {nullable:true})
    @Type(() => MoveBattleStylesWhereUniqueInput)
    connect?: Prisma.AtLeast<MoveBattleStylesWhereUniqueInput, 'id'>;
}
