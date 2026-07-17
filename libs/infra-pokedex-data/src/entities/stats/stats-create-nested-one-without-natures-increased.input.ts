import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StatsCreateWithoutNaturesIncreasedInput } from './stats-create-without-natures-increased.input';
import { Type } from 'class-transformer';
import { StatsCreateOrConnectWithoutNaturesIncreasedInput } from './stats-create-or-connect-without-natures-increased.input';
import { Prisma } from '@pokemon-center/prisma';
import { StatsWhereUniqueInput } from './stats-where-unique.input';

@InputType()
export class StatsCreateNestedOneWithoutNaturesIncreasedInput {

    @Field(() => StatsCreateWithoutNaturesIncreasedInput, {nullable:true})
    @Type(() => StatsCreateWithoutNaturesIncreasedInput)
    create?: Identity<StatsCreateWithoutNaturesIncreasedInput>;

    @Field(() => StatsCreateOrConnectWithoutNaturesIncreasedInput, {nullable:true})
    @Type(() => StatsCreateOrConnectWithoutNaturesIncreasedInput)
    connectOrCreate?: Identity<StatsCreateOrConnectWithoutNaturesIncreasedInput>;

    @Field(() => StatsWhereUniqueInput, {nullable:true})
    @Type(() => StatsWhereUniqueInput)
    connect?: Prisma.AtLeast<StatsWhereUniqueInput, 'id'>;
}
