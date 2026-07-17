import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StatsCreateWithoutCharacteristicsInput } from './stats-create-without-characteristics.input';
import { Type } from 'class-transformer';
import { StatsCreateOrConnectWithoutCharacteristicsInput } from './stats-create-or-connect-without-characteristics.input';
import { StatsUpsertWithoutCharacteristicsInput } from './stats-upsert-without-characteristics.input';
import { Prisma } from '@pokemon-center/prisma';
import { StatsWhereUniqueInput } from './stats-where-unique.input';
import { StatsUpdateToOneWithWhereWithoutCharacteristicsInput } from './stats-update-to-one-with-where-without-characteristics.input';

@InputType()
export class StatsUpdateOneRequiredWithoutCharacteristicsNestedInput {

    @Field(() => StatsCreateWithoutCharacteristicsInput, {nullable:true})
    @Type(() => StatsCreateWithoutCharacteristicsInput)
    create?: Identity<StatsCreateWithoutCharacteristicsInput>;

    @Field(() => StatsCreateOrConnectWithoutCharacteristicsInput, {nullable:true})
    @Type(() => StatsCreateOrConnectWithoutCharacteristicsInput)
    connectOrCreate?: Identity<StatsCreateOrConnectWithoutCharacteristicsInput>;

    @Field(() => StatsUpsertWithoutCharacteristicsInput, {nullable:true})
    @Type(() => StatsUpsertWithoutCharacteristicsInput)
    upsert?: Identity<StatsUpsertWithoutCharacteristicsInput>;

    @Field(() => StatsWhereUniqueInput, {nullable:true})
    @Type(() => StatsWhereUniqueInput)
    connect?: Prisma.AtLeast<StatsWhereUniqueInput, 'id'>;

    @Field(() => StatsUpdateToOneWithWhereWithoutCharacteristicsInput, {nullable:true})
    @Type(() => StatsUpdateToOneWithWhereWithoutCharacteristicsInput)
    update?: Identity<StatsUpdateToOneWithWhereWithoutCharacteristicsInput>;
}
