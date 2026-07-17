import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StatsCreateWithoutCharacteristicsInput } from './stats-create-without-characteristics.input';
import { Type } from 'class-transformer';
import { StatsCreateOrConnectWithoutCharacteristicsInput } from './stats-create-or-connect-without-characteristics.input';
import { Prisma } from '@prisma/client';
import { StatsWhereUniqueInput } from './stats-where-unique.input';

@InputType()
export class StatsCreateNestedOneWithoutCharacteristicsInput {

    @Field(() => StatsCreateWithoutCharacteristicsInput, {nullable:true})
    @Type(() => StatsCreateWithoutCharacteristicsInput)
    create?: StatsCreateWithoutCharacteristicsInput;

    @Field(() => StatsCreateOrConnectWithoutCharacteristicsInput, {nullable:true})
    @Type(() => StatsCreateOrConnectWithoutCharacteristicsInput)
    connectOrCreate?: StatsCreateOrConnectWithoutCharacteristicsInput;

    @Field(() => StatsWhereUniqueInput, {nullable:true})
    @Type(() => StatsWhereUniqueInput)
    connect?: Prisma.AtLeast<StatsWhereUniqueInput, 'id'>;
}
