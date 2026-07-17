import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StatsCreateWithoutNaturesIncreasedInput } from './stats-create-without-natures-increased.input';
import { Type } from 'class-transformer';
import { StatsCreateOrConnectWithoutNaturesIncreasedInput } from './stats-create-or-connect-without-natures-increased.input';
import { StatsUpsertWithoutNaturesIncreasedInput } from './stats-upsert-without-natures-increased.input';
import { Prisma } from '@pokemon-center/prisma';
import { StatsWhereUniqueInput } from './stats-where-unique.input';
import { StatsUpdateToOneWithWhereWithoutNaturesIncreasedInput } from './stats-update-to-one-with-where-without-natures-increased.input';

@InputType()
export class StatsUpdateOneRequiredWithoutNaturesIncreasedNestedInput {

    @Field(() => StatsCreateWithoutNaturesIncreasedInput, {nullable:true})
    @Type(() => StatsCreateWithoutNaturesIncreasedInput)
    create?: Identity<StatsCreateWithoutNaturesIncreasedInput>;

    @Field(() => StatsCreateOrConnectWithoutNaturesIncreasedInput, {nullable:true})
    @Type(() => StatsCreateOrConnectWithoutNaturesIncreasedInput)
    connectOrCreate?: Identity<StatsCreateOrConnectWithoutNaturesIncreasedInput>;

    @Field(() => StatsUpsertWithoutNaturesIncreasedInput, {nullable:true})
    @Type(() => StatsUpsertWithoutNaturesIncreasedInput)
    upsert?: Identity<StatsUpsertWithoutNaturesIncreasedInput>;

    @Field(() => StatsWhereUniqueInput, {nullable:true})
    @Type(() => StatsWhereUniqueInput)
    connect?: Prisma.AtLeast<StatsWhereUniqueInput, 'id'>;

    @Field(() => StatsUpdateToOneWithWhereWithoutNaturesIncreasedInput, {nullable:true})
    @Type(() => StatsUpdateToOneWithWhereWithoutNaturesIncreasedInput)
    update?: Identity<StatsUpdateToOneWithWhereWithoutNaturesIncreasedInput>;
}
