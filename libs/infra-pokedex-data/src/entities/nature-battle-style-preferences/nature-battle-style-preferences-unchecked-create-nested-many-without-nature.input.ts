import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NatureBattleStylePreferencesCreateWithoutNatureInput } from './nature-battle-style-preferences-create-without-nature.input';
import { Type } from 'class-transformer';
import { NatureBattleStylePreferencesCreateOrConnectWithoutNatureInput } from './nature-battle-style-preferences-create-or-connect-without-nature.input';
import { NatureBattleStylePreferencesCreateManyNatureInputEnvelope } from './nature-battle-style-preferences-create-many-nature-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NatureBattleStylePreferencesWhereUniqueInput } from './nature-battle-style-preferences-where-unique.input';

@InputType()
export class NatureBattleStylePreferencesUncheckedCreateNestedManyWithoutNatureInput {

    @Field(() => [NatureBattleStylePreferencesCreateWithoutNatureInput], {nullable:true})
    @Type(() => NatureBattleStylePreferencesCreateWithoutNatureInput)
    create?: Array<NatureBattleStylePreferencesCreateWithoutNatureInput>;

    @Field(() => [NatureBattleStylePreferencesCreateOrConnectWithoutNatureInput], {nullable:true})
    @Type(() => NatureBattleStylePreferencesCreateOrConnectWithoutNatureInput)
    connectOrCreate?: Array<NatureBattleStylePreferencesCreateOrConnectWithoutNatureInput>;

    @Field(() => NatureBattleStylePreferencesCreateManyNatureInputEnvelope, {nullable:true})
    @Type(() => NatureBattleStylePreferencesCreateManyNatureInputEnvelope)
    createMany?: NatureBattleStylePreferencesCreateManyNatureInputEnvelope;

    @Field(() => [NatureBattleStylePreferencesWhereUniqueInput], {nullable:true})
    @Type(() => NatureBattleStylePreferencesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NatureBattleStylePreferencesWhereUniqueInput, 'nature_id'>>;
}
