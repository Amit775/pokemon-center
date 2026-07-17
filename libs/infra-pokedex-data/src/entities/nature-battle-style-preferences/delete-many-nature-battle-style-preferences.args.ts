import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NatureBattleStylePreferencesWhereInput } from './nature-battle-style-preferences-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyNatureBattleStylePreferencesArgs {

    @Field(() => NatureBattleStylePreferencesWhereInput, {nullable:true})
    @Type(() => NatureBattleStylePreferencesWhereInput)
    where?: NatureBattleStylePreferencesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
