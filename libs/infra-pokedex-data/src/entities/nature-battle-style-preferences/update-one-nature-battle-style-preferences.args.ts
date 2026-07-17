import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NatureBattleStylePreferencesUpdateInput } from './nature-battle-style-preferences-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { NatureBattleStylePreferencesWhereUniqueInput } from './nature-battle-style-preferences-where-unique.input';

@ArgsType()
export class UpdateOneNatureBattleStylePreferencesArgs {

    @Field(() => NatureBattleStylePreferencesUpdateInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesUpdateInput)
    data!: Identity<NatureBattleStylePreferencesUpdateInput>;

    @Field(() => NatureBattleStylePreferencesWhereUniqueInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesWhereUniqueInput)
    where!: Prisma.AtLeast<NatureBattleStylePreferencesWhereUniqueInput, 'nature_id'>;
}
