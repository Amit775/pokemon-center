import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NatureBattleStylePreferencesCreateWithoutNatureInput } from './nature-battle-style-preferences-create-without-nature.input';
import { Type } from 'class-transformer';
import { NatureBattleStylePreferencesCreateOrConnectWithoutNatureInput } from './nature-battle-style-preferences-create-or-connect-without-nature.input';
import { NatureBattleStylePreferencesUpsertWithWhereUniqueWithoutNatureInput } from './nature-battle-style-preferences-upsert-with-where-unique-without-nature.input';
import type { Identity } from 'identity-type';
import { NatureBattleStylePreferencesCreateManyNatureInputEnvelope } from './nature-battle-style-preferences-create-many-nature-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { NatureBattleStylePreferencesWhereUniqueInput } from './nature-battle-style-preferences-where-unique.input';
import { NatureBattleStylePreferencesUpdateWithWhereUniqueWithoutNatureInput } from './nature-battle-style-preferences-update-with-where-unique-without-nature.input';
import { NatureBattleStylePreferencesUpdateManyWithWhereWithoutNatureInput } from './nature-battle-style-preferences-update-many-with-where-without-nature.input';
import { NatureBattleStylePreferencesScalarWhereInput } from './nature-battle-style-preferences-scalar-where.input';

@InputType()
export class NatureBattleStylePreferencesUncheckedUpdateManyWithoutNatureNestedInput {

    @Field(() => [NatureBattleStylePreferencesCreateWithoutNatureInput], {nullable:true})
    @Type(() => NatureBattleStylePreferencesCreateWithoutNatureInput)
    create?: Array<NatureBattleStylePreferencesCreateWithoutNatureInput>;

    @Field(() => [NatureBattleStylePreferencesCreateOrConnectWithoutNatureInput], {nullable:true})
    @Type(() => NatureBattleStylePreferencesCreateOrConnectWithoutNatureInput)
    connectOrCreate?: Array<NatureBattleStylePreferencesCreateOrConnectWithoutNatureInput>;

    @Field(() => [NatureBattleStylePreferencesUpsertWithWhereUniqueWithoutNatureInput], {nullable:true})
    @Type(() => NatureBattleStylePreferencesUpsertWithWhereUniqueWithoutNatureInput)
    upsert?: Array<NatureBattleStylePreferencesUpsertWithWhereUniqueWithoutNatureInput>;

    @Field(() => NatureBattleStylePreferencesCreateManyNatureInputEnvelope, {nullable:true})
    @Type(() => NatureBattleStylePreferencesCreateManyNatureInputEnvelope)
    createMany?: Identity<NatureBattleStylePreferencesCreateManyNatureInputEnvelope>;

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

    @Field(() => [NatureBattleStylePreferencesUpdateWithWhereUniqueWithoutNatureInput], {nullable:true})
    @Type(() => NatureBattleStylePreferencesUpdateWithWhereUniqueWithoutNatureInput)
    update?: Array<NatureBattleStylePreferencesUpdateWithWhereUniqueWithoutNatureInput>;

    @Field(() => [NatureBattleStylePreferencesUpdateManyWithWhereWithoutNatureInput], {nullable:true})
    @Type(() => NatureBattleStylePreferencesUpdateManyWithWhereWithoutNatureInput)
    updateMany?: Array<NatureBattleStylePreferencesUpdateManyWithWhereWithoutNatureInput>;

    @Field(() => [NatureBattleStylePreferencesScalarWhereInput], {nullable:true})
    @Type(() => NatureBattleStylePreferencesScalarWhereInput)
    deleteMany?: Array<NatureBattleStylePreferencesScalarWhereInput>;
}
