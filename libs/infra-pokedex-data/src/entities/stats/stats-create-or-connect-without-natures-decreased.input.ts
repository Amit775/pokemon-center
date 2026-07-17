import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StatsWhereUniqueInput } from './stats-where-unique.input';
import { Type } from 'class-transformer';
import { StatsCreateWithoutNaturesDecreasedInput } from './stats-create-without-natures-decreased.input';

@InputType()
export class StatsCreateOrConnectWithoutNaturesDecreasedInput {

    @Field(() => StatsWhereUniqueInput, {nullable:false})
    @Type(() => StatsWhereUniqueInput)
    where!: Prisma.AtLeast<StatsWhereUniqueInput, 'id'>;

    @Field(() => StatsCreateWithoutNaturesDecreasedInput, {nullable:false})
    @Type(() => StatsCreateWithoutNaturesDecreasedInput)
    create!: StatsCreateWithoutNaturesDecreasedInput;
}
