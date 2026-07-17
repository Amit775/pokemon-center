import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NaturesCreateWithoutBattleStylePreferencesInput } from './natures-create-without-battle-style-preferences.input';
import { Type } from 'class-transformer';
import { NaturesCreateOrConnectWithoutBattleStylePreferencesInput } from './natures-create-or-connect-without-battle-style-preferences.input';
import { NaturesUpsertWithoutBattleStylePreferencesInput } from './natures-upsert-without-battle-style-preferences.input';
import { Prisma } from '@prisma/client';
import { NaturesWhereUniqueInput } from './natures-where-unique.input';
import { NaturesUpdateToOneWithWhereWithoutBattleStylePreferencesInput } from './natures-update-to-one-with-where-without-battle-style-preferences.input';

@InputType()
export class NaturesUpdateOneRequiredWithoutBattleStylePreferencesNestedInput {

    @Field(() => NaturesCreateWithoutBattleStylePreferencesInput, {nullable:true})
    @Type(() => NaturesCreateWithoutBattleStylePreferencesInput)
    create?: NaturesCreateWithoutBattleStylePreferencesInput;

    @Field(() => NaturesCreateOrConnectWithoutBattleStylePreferencesInput, {nullable:true})
    @Type(() => NaturesCreateOrConnectWithoutBattleStylePreferencesInput)
    connectOrCreate?: NaturesCreateOrConnectWithoutBattleStylePreferencesInput;

    @Field(() => NaturesUpsertWithoutBattleStylePreferencesInput, {nullable:true})
    @Type(() => NaturesUpsertWithoutBattleStylePreferencesInput)
    upsert?: NaturesUpsertWithoutBattleStylePreferencesInput;

    @Field(() => NaturesWhereUniqueInput, {nullable:true})
    @Type(() => NaturesWhereUniqueInput)
    connect?: Prisma.AtLeast<NaturesWhereUniqueInput, 'id'>;

    @Field(() => NaturesUpdateToOneWithWhereWithoutBattleStylePreferencesInput, {nullable:true})
    @Type(() => NaturesUpdateToOneWithWhereWithoutBattleStylePreferencesInput)
    update?: NaturesUpdateToOneWithWhereWithoutBattleStylePreferencesInput;
}
