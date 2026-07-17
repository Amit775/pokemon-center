import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StatsCreateWithoutNaturesDecreasedInput } from './stats-create-without-natures-decreased.input';
import { Type } from 'class-transformer';
import { StatsCreateOrConnectWithoutNaturesDecreasedInput } from './stats-create-or-connect-without-natures-decreased.input';
import { Prisma } from '@pokemon-center/prisma';
import { StatsWhereUniqueInput } from './stats-where-unique.input';

@InputType()
export class StatsCreateNestedOneWithoutNaturesDecreasedInput {

    @Field(() => StatsCreateWithoutNaturesDecreasedInput, {nullable:true})
    @Type(() => StatsCreateWithoutNaturesDecreasedInput)
    create?: Identity<StatsCreateWithoutNaturesDecreasedInput>;

    @Field(() => StatsCreateOrConnectWithoutNaturesDecreasedInput, {nullable:true})
    @Type(() => StatsCreateOrConnectWithoutNaturesDecreasedInput)
    connectOrCreate?: Identity<StatsCreateOrConnectWithoutNaturesDecreasedInput>;

    @Field(() => StatsWhereUniqueInput, {nullable:true})
    @Type(() => StatsWhereUniqueInput)
    connect?: Prisma.AtLeast<StatsWhereUniqueInput, 'id'>;
}
