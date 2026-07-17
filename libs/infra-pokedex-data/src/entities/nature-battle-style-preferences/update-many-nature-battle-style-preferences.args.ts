import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NatureBattleStylePreferencesUpdateManyMutationInput } from './nature-battle-style-preferences-update-many-mutation.input';
import { Type } from 'class-transformer';
import { NatureBattleStylePreferencesWhereInput } from './nature-battle-style-preferences-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyNatureBattleStylePreferencesArgs {

    @Field(() => NatureBattleStylePreferencesUpdateManyMutationInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesUpdateManyMutationInput)
    data!: Identity<NatureBattleStylePreferencesUpdateManyMutationInput>;

    @Field(() => NatureBattleStylePreferencesWhereInput, {nullable:true})
    @Type(() => NatureBattleStylePreferencesWhereInput)
    where?: Identity<NatureBattleStylePreferencesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
