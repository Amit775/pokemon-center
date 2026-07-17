import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NaturesWhereInput } from './natures-where.input';
import { Type } from 'class-transformer';
import { NaturesUpdateWithoutBattleStylePreferencesInput } from './natures-update-without-battle-style-preferences.input';

@InputType()
export class NaturesUpdateToOneWithWhereWithoutBattleStylePreferencesInput {

    @Field(() => NaturesWhereInput, {nullable:true})
    @Type(() => NaturesWhereInput)
    where?: Identity<NaturesWhereInput>;

    @Field(() => NaturesUpdateWithoutBattleStylePreferencesInput, {nullable:false})
    @Type(() => NaturesUpdateWithoutBattleStylePreferencesInput)
    data!: Identity<NaturesUpdateWithoutBattleStylePreferencesInput>;
}
