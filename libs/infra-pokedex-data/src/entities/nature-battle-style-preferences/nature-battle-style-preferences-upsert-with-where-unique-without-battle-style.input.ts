import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NatureBattleStylePreferencesWhereUniqueInput } from './nature-battle-style-preferences-where-unique.input';
import { Type } from 'class-transformer';
import { NatureBattleStylePreferencesUpdateWithoutBattleStyleInput } from './nature-battle-style-preferences-update-without-battle-style.input';
import { NatureBattleStylePreferencesCreateWithoutBattleStyleInput } from './nature-battle-style-preferences-create-without-battle-style.input';

@InputType()
export class NatureBattleStylePreferencesUpsertWithWhereUniqueWithoutBattleStyleInput {

    @Field(() => NatureBattleStylePreferencesWhereUniqueInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesWhereUniqueInput)
    where!: Prisma.AtLeast<NatureBattleStylePreferencesWhereUniqueInput, 'nature_id'>;

    @Field(() => NatureBattleStylePreferencesUpdateWithoutBattleStyleInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesUpdateWithoutBattleStyleInput)
    update!: NatureBattleStylePreferencesUpdateWithoutBattleStyleInput;

    @Field(() => NatureBattleStylePreferencesCreateWithoutBattleStyleInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesCreateWithoutBattleStyleInput)
    create!: NatureBattleStylePreferencesCreateWithoutBattleStyleInput;
}
