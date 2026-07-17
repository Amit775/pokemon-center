import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NaturesCreateWithoutBattleStylePreferencesInput } from './natures-create-without-battle-style-preferences.input';
import { Type } from 'class-transformer';
import { NaturesCreateOrConnectWithoutBattleStylePreferencesInput } from './natures-create-or-connect-without-battle-style-preferences.input';
import { Prisma } from '@pokemon-center/prisma';
import { NaturesWhereUniqueInput } from './natures-where-unique.input';

@InputType()
export class NaturesCreateNestedOneWithoutBattleStylePreferencesInput {

    @Field(() => NaturesCreateWithoutBattleStylePreferencesInput, {nullable:true})
    @Type(() => NaturesCreateWithoutBattleStylePreferencesInput)
    create?: Identity<NaturesCreateWithoutBattleStylePreferencesInput>;

    @Field(() => NaturesCreateOrConnectWithoutBattleStylePreferencesInput, {nullable:true})
    @Type(() => NaturesCreateOrConnectWithoutBattleStylePreferencesInput)
    connectOrCreate?: Identity<NaturesCreateOrConnectWithoutBattleStylePreferencesInput>;

    @Field(() => NaturesWhereUniqueInput, {nullable:true})
    @Type(() => NaturesWhereUniqueInput)
    connect?: Prisma.AtLeast<NaturesWhereUniqueInput, 'id'>;
}
