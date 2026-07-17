import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { NatureBattleStylePreferencesWhereUniqueInput } from './nature-battle-style-preferences-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { NatureBattleStylePreferencesCreateWithoutBattleStyleInput } from './nature-battle-style-preferences-create-without-battle-style.input';

@InputType()
export class NatureBattleStylePreferencesCreateOrConnectWithoutBattleStyleInput {

    @Field(() => NatureBattleStylePreferencesWhereUniqueInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesWhereUniqueInput)
    where!: Prisma.AtLeast<NatureBattleStylePreferencesWhereUniqueInput, 'nature_id'>;

    @Field(() => NatureBattleStylePreferencesCreateWithoutBattleStyleInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesCreateWithoutBattleStyleInput)
    create!: Identity<NatureBattleStylePreferencesCreateWithoutBattleStyleInput>;
}
