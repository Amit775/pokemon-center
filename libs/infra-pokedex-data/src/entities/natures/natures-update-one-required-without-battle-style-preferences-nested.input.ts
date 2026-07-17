import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NaturesCreateWithoutBattleStylePreferencesInput } from './natures-create-without-battle-style-preferences.input';
import { Type } from 'class-transformer';
import { NaturesCreateOrConnectWithoutBattleStylePreferencesInput } from './natures-create-or-connect-without-battle-style-preferences.input';
import { NaturesUpsertWithoutBattleStylePreferencesInput } from './natures-upsert-without-battle-style-preferences.input';
import { Prisma } from '@pokemon-center/prisma';
import { NaturesWhereUniqueInput } from './natures-where-unique.input';
import { NaturesUpdateToOneWithWhereWithoutBattleStylePreferencesInput } from './natures-update-to-one-with-where-without-battle-style-preferences.input';

@InputType()
export class NaturesUpdateOneRequiredWithoutBattleStylePreferencesNestedInput {

    @Field(() => NaturesCreateWithoutBattleStylePreferencesInput, {nullable:true})
    @Type(() => NaturesCreateWithoutBattleStylePreferencesInput)
    create?: Identity<NaturesCreateWithoutBattleStylePreferencesInput>;

    @Field(() => NaturesCreateOrConnectWithoutBattleStylePreferencesInput, {nullable:true})
    @Type(() => NaturesCreateOrConnectWithoutBattleStylePreferencesInput)
    connectOrCreate?: Identity<NaturesCreateOrConnectWithoutBattleStylePreferencesInput>;

    @Field(() => NaturesUpsertWithoutBattleStylePreferencesInput, {nullable:true})
    @Type(() => NaturesUpsertWithoutBattleStylePreferencesInput)
    upsert?: Identity<NaturesUpsertWithoutBattleStylePreferencesInput>;

    @Field(() => NaturesWhereUniqueInput, {nullable:true})
    @Type(() => NaturesWhereUniqueInput)
    connect?: Prisma.AtLeast<NaturesWhereUniqueInput, 'id'>;

    @Field(() => NaturesUpdateToOneWithWhereWithoutBattleStylePreferencesInput, {nullable:true})
    @Type(() => NaturesUpdateToOneWithWhereWithoutBattleStylePreferencesInput)
    update?: Identity<NaturesUpdateToOneWithWhereWithoutBattleStylePreferencesInput>;
}
