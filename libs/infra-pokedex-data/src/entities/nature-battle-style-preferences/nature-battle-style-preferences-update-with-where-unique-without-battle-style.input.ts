import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { NatureBattleStylePreferencesWhereUniqueInput } from './nature-battle-style-preferences-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { NatureBattleStylePreferencesUpdateWithoutBattleStyleInput } from './nature-battle-style-preferences-update-without-battle-style.input';

@InputType()
export class NatureBattleStylePreferencesUpdateWithWhereUniqueWithoutBattleStyleInput {

    @Field(() => NatureBattleStylePreferencesWhereUniqueInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesWhereUniqueInput)
    where!: Prisma.AtLeast<NatureBattleStylePreferencesWhereUniqueInput, 'nature_id'>;

    @Field(() => NatureBattleStylePreferencesUpdateWithoutBattleStyleInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesUpdateWithoutBattleStyleInput)
    data!: Identity<NatureBattleStylePreferencesUpdateWithoutBattleStyleInput>;
}
