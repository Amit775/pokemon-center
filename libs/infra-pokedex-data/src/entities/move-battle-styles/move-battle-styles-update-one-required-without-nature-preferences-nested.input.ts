import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveBattleStylesCreateWithoutNaturePreferencesInput } from './move-battle-styles-create-without-nature-preferences.input';
import { Type } from 'class-transformer';
import { MoveBattleStylesCreateOrConnectWithoutNaturePreferencesInput } from './move-battle-styles-create-or-connect-without-nature-preferences.input';
import { MoveBattleStylesUpsertWithoutNaturePreferencesInput } from './move-battle-styles-upsert-without-nature-preferences.input';
import { Prisma } from '@pokemon-center/prisma';
import { MoveBattleStylesWhereUniqueInput } from './move-battle-styles-where-unique.input';
import { MoveBattleStylesUpdateToOneWithWhereWithoutNaturePreferencesInput } from './move-battle-styles-update-to-one-with-where-without-nature-preferences.input';

@InputType()
export class MoveBattleStylesUpdateOneRequiredWithoutNaturePreferencesNestedInput {

    @Field(() => MoveBattleStylesCreateWithoutNaturePreferencesInput, {nullable:true})
    @Type(() => MoveBattleStylesCreateWithoutNaturePreferencesInput)
    create?: Identity<MoveBattleStylesCreateWithoutNaturePreferencesInput>;

    @Field(() => MoveBattleStylesCreateOrConnectWithoutNaturePreferencesInput, {nullable:true})
    @Type(() => MoveBattleStylesCreateOrConnectWithoutNaturePreferencesInput)
    connectOrCreate?: Identity<MoveBattleStylesCreateOrConnectWithoutNaturePreferencesInput>;

    @Field(() => MoveBattleStylesUpsertWithoutNaturePreferencesInput, {nullable:true})
    @Type(() => MoveBattleStylesUpsertWithoutNaturePreferencesInput)
    upsert?: Identity<MoveBattleStylesUpsertWithoutNaturePreferencesInput>;

    @Field(() => MoveBattleStylesWhereUniqueInput, {nullable:true})
    @Type(() => MoveBattleStylesWhereUniqueInput)
    connect?: Prisma.AtLeast<MoveBattleStylesWhereUniqueInput, 'id'>;

    @Field(() => MoveBattleStylesUpdateToOneWithWhereWithoutNaturePreferencesInput, {nullable:true})
    @Type(() => MoveBattleStylesUpdateToOneWithWhereWithoutNaturePreferencesInput)
    update?: Identity<MoveBattleStylesUpdateToOneWithWhereWithoutNaturePreferencesInput>;
}
