import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NatureBattleStylePreferencesWhereUniqueInput } from './nature-battle-style-preferences-where-unique.input';
import { Type } from 'class-transformer';
import { NatureBattleStylePreferencesUpdateWithoutNatureInput } from './nature-battle-style-preferences-update-without-nature.input';
import { NatureBattleStylePreferencesCreateWithoutNatureInput } from './nature-battle-style-preferences-create-without-nature.input';

@InputType()
export class NatureBattleStylePreferencesUpsertWithWhereUniqueWithoutNatureInput {

    @Field(() => NatureBattleStylePreferencesWhereUniqueInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesWhereUniqueInput)
    where!: Prisma.AtLeast<NatureBattleStylePreferencesWhereUniqueInput, 'nature_id'>;

    @Field(() => NatureBattleStylePreferencesUpdateWithoutNatureInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesUpdateWithoutNatureInput)
    update!: NatureBattleStylePreferencesUpdateWithoutNatureInput;

    @Field(() => NatureBattleStylePreferencesCreateWithoutNatureInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesCreateWithoutNatureInput)
    create!: NatureBattleStylePreferencesCreateWithoutNatureInput;
}
