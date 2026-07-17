import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NatureBattleStylePreferencesWhereInput } from './nature-battle-style-preferences-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyNatureBattleStylePreferencesArgs {

    @Field(() => NatureBattleStylePreferencesWhereInput, {nullable:true})
    @Type(() => NatureBattleStylePreferencesWhereInput)
    where?: Identity<NatureBattleStylePreferencesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
