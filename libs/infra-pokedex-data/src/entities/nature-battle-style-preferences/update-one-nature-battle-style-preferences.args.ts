import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NatureBattleStylePreferencesUpdateInput } from './nature-battle-style-preferences-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { NatureBattleStylePreferencesWhereUniqueInput } from './nature-battle-style-preferences-where-unique.input';

@ArgsType()
export class UpdateOneNatureBattleStylePreferencesArgs {

    @Field(() => NatureBattleStylePreferencesUpdateInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesUpdateInput)
    data!: NatureBattleStylePreferencesUpdateInput;

    @Field(() => NatureBattleStylePreferencesWhereUniqueInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesWhereUniqueInput)
    where!: Prisma.AtLeast<NatureBattleStylePreferencesWhereUniqueInput, 'nature_id'>;
}
