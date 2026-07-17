import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StatsCreateWithoutNaturesIncreasedInput } from './stats-create-without-natures-increased.input';
import { Type } from 'class-transformer';
import { StatsCreateOrConnectWithoutNaturesIncreasedInput } from './stats-create-or-connect-without-natures-increased.input';
import { Prisma } from '@prisma/client';
import { StatsWhereUniqueInput } from './stats-where-unique.input';

@InputType()
export class StatsCreateNestedOneWithoutNaturesIncreasedInput {

    @Field(() => StatsCreateWithoutNaturesIncreasedInput, {nullable:true})
    @Type(() => StatsCreateWithoutNaturesIncreasedInput)
    create?: StatsCreateWithoutNaturesIncreasedInput;

    @Field(() => StatsCreateOrConnectWithoutNaturesIncreasedInput, {nullable:true})
    @Type(() => StatsCreateOrConnectWithoutNaturesIncreasedInput)
    connectOrCreate?: StatsCreateOrConnectWithoutNaturesIncreasedInput;

    @Field(() => StatsWhereUniqueInput, {nullable:true})
    @Type(() => StatsWhereUniqueInput)
    connect?: Prisma.AtLeast<StatsWhereUniqueInput, 'id'>;
}
