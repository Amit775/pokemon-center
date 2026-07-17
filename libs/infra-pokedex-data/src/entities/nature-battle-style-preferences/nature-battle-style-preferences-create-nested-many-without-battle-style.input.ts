import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NatureBattleStylePreferencesCreateWithoutBattleStyleInput } from './nature-battle-style-preferences-create-without-battle-style.input';
import { Type } from 'class-transformer';
import { NatureBattleStylePreferencesCreateOrConnectWithoutBattleStyleInput } from './nature-battle-style-preferences-create-or-connect-without-battle-style.input';
import type { Identity } from 'identity-type';
import { NatureBattleStylePreferencesCreateManyBattleStyleInputEnvelope } from './nature-battle-style-preferences-create-many-battle-style-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { NatureBattleStylePreferencesWhereUniqueInput } from './nature-battle-style-preferences-where-unique.input';

@InputType()
export class NatureBattleStylePreferencesCreateNestedManyWithoutBattleStyleInput {

    @Field(() => [NatureBattleStylePreferencesCreateWithoutBattleStyleInput], {nullable:true})
    @Type(() => NatureBattleStylePreferencesCreateWithoutBattleStyleInput)
    create?: Array<NatureBattleStylePreferencesCreateWithoutBattleStyleInput>;

    @Field(() => [NatureBattleStylePreferencesCreateOrConnectWithoutBattleStyleInput], {nullable:true})
    @Type(() => NatureBattleStylePreferencesCreateOrConnectWithoutBattleStyleInput)
    connectOrCreate?: Array<NatureBattleStylePreferencesCreateOrConnectWithoutBattleStyleInput>;

    @Field(() => NatureBattleStylePreferencesCreateManyBattleStyleInputEnvelope, {nullable:true})
    @Type(() => NatureBattleStylePreferencesCreateManyBattleStyleInputEnvelope)
    createMany?: Identity<NatureBattleStylePreferencesCreateManyBattleStyleInputEnvelope>;

    @Field(() => [NatureBattleStylePreferencesWhereUniqueInput], {nullable:true})
    @Type(() => NatureBattleStylePreferencesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NatureBattleStylePreferencesWhereUniqueInput, 'nature_id'>>;
}
