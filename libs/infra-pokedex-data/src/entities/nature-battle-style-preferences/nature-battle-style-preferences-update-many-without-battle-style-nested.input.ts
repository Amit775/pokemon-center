import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NatureBattleStylePreferencesCreateWithoutBattleStyleInput } from './nature-battle-style-preferences-create-without-battle-style.input';
import { Type } from 'class-transformer';
import { NatureBattleStylePreferencesCreateOrConnectWithoutBattleStyleInput } from './nature-battle-style-preferences-create-or-connect-without-battle-style.input';
import { NatureBattleStylePreferencesUpsertWithWhereUniqueWithoutBattleStyleInput } from './nature-battle-style-preferences-upsert-with-where-unique-without-battle-style.input';
import type { Identity } from 'identity-type';
import { NatureBattleStylePreferencesCreateManyBattleStyleInputEnvelope } from './nature-battle-style-preferences-create-many-battle-style-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { NatureBattleStylePreferencesWhereUniqueInput } from './nature-battle-style-preferences-where-unique.input';
import { NatureBattleStylePreferencesUpdateWithWhereUniqueWithoutBattleStyleInput } from './nature-battle-style-preferences-update-with-where-unique-without-battle-style.input';
import { NatureBattleStylePreferencesUpdateManyWithWhereWithoutBattleStyleInput } from './nature-battle-style-preferences-update-many-with-where-without-battle-style.input';
import { NatureBattleStylePreferencesScalarWhereInput } from './nature-battle-style-preferences-scalar-where.input';

@InputType()
export class NatureBattleStylePreferencesUpdateManyWithoutBattleStyleNestedInput {

    @Field(() => [NatureBattleStylePreferencesCreateWithoutBattleStyleInput], {nullable:true})
    @Type(() => NatureBattleStylePreferencesCreateWithoutBattleStyleInput)
    create?: Array<NatureBattleStylePreferencesCreateWithoutBattleStyleInput>;

    @Field(() => [NatureBattleStylePreferencesCreateOrConnectWithoutBattleStyleInput], {nullable:true})
    @Type(() => NatureBattleStylePreferencesCreateOrConnectWithoutBattleStyleInput)
    connectOrCreate?: Array<NatureBattleStylePreferencesCreateOrConnectWithoutBattleStyleInput>;

    @Field(() => [NatureBattleStylePreferencesUpsertWithWhereUniqueWithoutBattleStyleInput], {nullable:true})
    @Type(() => NatureBattleStylePreferencesUpsertWithWhereUniqueWithoutBattleStyleInput)
    upsert?: Array<NatureBattleStylePreferencesUpsertWithWhereUniqueWithoutBattleStyleInput>;

    @Field(() => NatureBattleStylePreferencesCreateManyBattleStyleInputEnvelope, {nullable:true})
    @Type(() => NatureBattleStylePreferencesCreateManyBattleStyleInputEnvelope)
    createMany?: Identity<NatureBattleStylePreferencesCreateManyBattleStyleInputEnvelope>;

    @Field(() => [NatureBattleStylePreferencesWhereUniqueInput], {nullable:true})
    @Type(() => NatureBattleStylePreferencesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<NatureBattleStylePreferencesWhereUniqueInput, 'nature_id'>>;

    @Field(() => [NatureBattleStylePreferencesWhereUniqueInput], {nullable:true})
    @Type(() => NatureBattleStylePreferencesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<NatureBattleStylePreferencesWhereUniqueInput, 'nature_id'>>;

    @Field(() => [NatureBattleStylePreferencesWhereUniqueInput], {nullable:true})
    @Type(() => NatureBattleStylePreferencesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<NatureBattleStylePreferencesWhereUniqueInput, 'nature_id'>>;

    @Field(() => [NatureBattleStylePreferencesWhereUniqueInput], {nullable:true})
    @Type(() => NatureBattleStylePreferencesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NatureBattleStylePreferencesWhereUniqueInput, 'nature_id'>>;

    @Field(() => [NatureBattleStylePreferencesUpdateWithWhereUniqueWithoutBattleStyleInput], {nullable:true})
    @Type(() => NatureBattleStylePreferencesUpdateWithWhereUniqueWithoutBattleStyleInput)
    update?: Array<NatureBattleStylePreferencesUpdateWithWhereUniqueWithoutBattleStyleInput>;

    @Field(() => [NatureBattleStylePreferencesUpdateManyWithWhereWithoutBattleStyleInput], {nullable:true})
    @Type(() => NatureBattleStylePreferencesUpdateManyWithWhereWithoutBattleStyleInput)
    updateMany?: Array<NatureBattleStylePreferencesUpdateManyWithWhereWithoutBattleStyleInput>;

    @Field(() => [NatureBattleStylePreferencesScalarWhereInput], {nullable:true})
    @Type(() => NatureBattleStylePreferencesScalarWhereInput)
    deleteMany?: Array<NatureBattleStylePreferencesScalarWhereInput>;
}
