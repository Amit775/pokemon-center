import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NaturesUpdateWithoutBattleStylePreferencesInput } from './natures-update-without-battle-style-preferences.input';
import { Type } from 'class-transformer';
import { NaturesCreateWithoutBattleStylePreferencesInput } from './natures-create-without-battle-style-preferences.input';
import { NaturesWhereInput } from './natures-where.input';

@InputType()
export class NaturesUpsertWithoutBattleStylePreferencesInput {

    @Field(() => NaturesUpdateWithoutBattleStylePreferencesInput, {nullable:false})
    @Type(() => NaturesUpdateWithoutBattleStylePreferencesInput)
    update!: Identity<NaturesUpdateWithoutBattleStylePreferencesInput>;

    @Field(() => NaturesCreateWithoutBattleStylePreferencesInput, {nullable:false})
    @Type(() => NaturesCreateWithoutBattleStylePreferencesInput)
    create!: Identity<NaturesCreateWithoutBattleStylePreferencesInput>;

    @Field(() => NaturesWhereInput, {nullable:true})
    @Type(() => NaturesWhereInput)
    where?: Identity<NaturesWhereInput>;
}
