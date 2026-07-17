import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { NatureBattleStylePreferencesWhereUniqueInput } from './nature-battle-style-preferences-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { NatureBattleStylePreferencesCreateWithoutNatureInput } from './nature-battle-style-preferences-create-without-nature.input';

@InputType()
export class NatureBattleStylePreferencesCreateOrConnectWithoutNatureInput {

    @Field(() => NatureBattleStylePreferencesWhereUniqueInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesWhereUniqueInput)
    where!: Prisma.AtLeast<NatureBattleStylePreferencesWhereUniqueInput, 'nature_id'>;

    @Field(() => NatureBattleStylePreferencesCreateWithoutNatureInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesCreateWithoutNatureInput)
    create!: Identity<NatureBattleStylePreferencesCreateWithoutNatureInput>;
}
