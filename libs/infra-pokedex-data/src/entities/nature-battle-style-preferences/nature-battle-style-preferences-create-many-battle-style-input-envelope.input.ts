import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NatureBattleStylePreferencesCreateManyBattleStyleInput } from './nature-battle-style-preferences-create-many-battle-style.input';
import { Type } from 'class-transformer';

@InputType()
export class NatureBattleStylePreferencesCreateManyBattleStyleInputEnvelope {

    @Field(() => [NatureBattleStylePreferencesCreateManyBattleStyleInput], {nullable:false})
    @Type(() => NatureBattleStylePreferencesCreateManyBattleStyleInput)
    data!: Array<NatureBattleStylePreferencesCreateManyBattleStyleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
