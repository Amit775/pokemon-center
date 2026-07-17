import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { NatureBattleStylePreferencesWhereUniqueInput } from './nature-battle-style-preferences-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { NatureBattleStylePreferencesCreateInput } from './nature-battle-style-preferences-create.input';
import { NatureBattleStylePreferencesUpdateInput } from './nature-battle-style-preferences-update.input';

@ArgsType()
export class UpsertOneNatureBattleStylePreferencesArgs {

    @Field(() => NatureBattleStylePreferencesWhereUniqueInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesWhereUniqueInput)
    where!: Prisma.AtLeast<NatureBattleStylePreferencesWhereUniqueInput, 'nature_id'>;

    @Field(() => NatureBattleStylePreferencesCreateInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesCreateInput)
    create!: Identity<NatureBattleStylePreferencesCreateInput>;

    @Field(() => NatureBattleStylePreferencesUpdateInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesUpdateInput)
    update!: Identity<NatureBattleStylePreferencesUpdateInput>;
}
