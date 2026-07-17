import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NatureBattleStylePreferencesCreateInput } from './nature-battle-style-preferences-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneNatureBattleStylePreferencesArgs {

    @Field(() => NatureBattleStylePreferencesCreateInput, {nullable:false})
    @Type(() => NatureBattleStylePreferencesCreateInput)
    data!: NatureBattleStylePreferencesCreateInput;
}
