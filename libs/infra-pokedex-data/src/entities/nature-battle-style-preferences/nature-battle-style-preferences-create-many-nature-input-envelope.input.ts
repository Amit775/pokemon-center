import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NatureBattleStylePreferencesCreateManyNatureInput } from './nature-battle-style-preferences-create-many-nature.input';
import { Type } from 'class-transformer';

@InputType()
export class NatureBattleStylePreferencesCreateManyNatureInputEnvelope {

    @Field(() => [NatureBattleStylePreferencesCreateManyNatureInput], {nullable:false})
    @Type(() => NatureBattleStylePreferencesCreateManyNatureInput)
    data!: Array<NatureBattleStylePreferencesCreateManyNatureInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
