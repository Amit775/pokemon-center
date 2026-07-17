import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StatsCreateWithoutCharacteristicsInput } from './stats-create-without-characteristics.input';
import { Type } from 'class-transformer';
import { StatsCreateOrConnectWithoutCharacteristicsInput } from './stats-create-or-connect-without-characteristics.input';
import { Prisma } from '@pokemon-center/prisma';
import { StatsWhereUniqueInput } from './stats-where-unique.input';

@InputType()
export class StatsCreateNestedOneWithoutCharacteristicsInput {

    @Field(() => StatsCreateWithoutCharacteristicsInput, {nullable:true})
    @Type(() => StatsCreateWithoutCharacteristicsInput)
    create?: Identity<StatsCreateWithoutCharacteristicsInput>;

    @Field(() => StatsCreateOrConnectWithoutCharacteristicsInput, {nullable:true})
    @Type(() => StatsCreateOrConnectWithoutCharacteristicsInput)
    connectOrCreate?: Identity<StatsCreateOrConnectWithoutCharacteristicsInput>;

    @Field(() => StatsWhereUniqueInput, {nullable:true})
    @Type(() => StatsWhereUniqueInput)
    connect?: Prisma.AtLeast<StatsWhereUniqueInput, 'id'>;
}
