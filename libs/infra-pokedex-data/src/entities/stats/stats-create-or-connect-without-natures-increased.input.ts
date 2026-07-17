import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StatsWhereUniqueInput } from './stats-where-unique.input';
import { Type } from 'class-transformer';
import { StatsCreateWithoutNaturesIncreasedInput } from './stats-create-without-natures-increased.input';

@InputType()
export class StatsCreateOrConnectWithoutNaturesIncreasedInput {

    @Field(() => StatsWhereUniqueInput, {nullable:false})
    @Type(() => StatsWhereUniqueInput)
    where!: Prisma.AtLeast<StatsWhereUniqueInput, 'id'>;

    @Field(() => StatsCreateWithoutNaturesIncreasedInput, {nullable:false})
    @Type(() => StatsCreateWithoutNaturesIncreasedInput)
    create!: StatsCreateWithoutNaturesIncreasedInput;
}
