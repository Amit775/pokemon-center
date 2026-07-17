import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StatsWhereUniqueInput } from './stats-where-unique.input';
import { Type } from 'class-transformer';
import { StatsCreateWithoutCharacteristicsInput } from './stats-create-without-characteristics.input';

@InputType()
export class StatsCreateOrConnectWithoutCharacteristicsInput {

    @Field(() => StatsWhereUniqueInput, {nullable:false})
    @Type(() => StatsWhereUniqueInput)
    where!: Prisma.AtLeast<StatsWhereUniqueInput, 'id'>;

    @Field(() => StatsCreateWithoutCharacteristicsInput, {nullable:false})
    @Type(() => StatsCreateWithoutCharacteristicsInput)
    create!: StatsCreateWithoutCharacteristicsInput;
}
