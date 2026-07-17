import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NaturesWhereUniqueInput } from './natures-where-unique.input';
import { Type } from 'class-transformer';
import { NaturesCreateWithoutBattleStylePreferencesInput } from './natures-create-without-battle-style-preferences.input';

@InputType()
export class NaturesCreateOrConnectWithoutBattleStylePreferencesInput {

    @Field(() => NaturesWhereUniqueInput, {nullable:false})
    @Type(() => NaturesWhereUniqueInput)
    where!: Prisma.AtLeast<NaturesWhereUniqueInput, 'id'>;

    @Field(() => NaturesCreateWithoutBattleStylePreferencesInput, {nullable:false})
    @Type(() => NaturesCreateWithoutBattleStylePreferencesInput)
    create!: NaturesCreateWithoutBattleStylePreferencesInput;
}
