import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { StatsWhereUniqueInput } from './stats-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { StatsCreateWithoutNaturesDecreasedInput } from './stats-create-without-natures-decreased.input';

@InputType()
export class StatsCreateOrConnectWithoutNaturesDecreasedInput {

    @Field(() => StatsWhereUniqueInput, {nullable:false})
    @Type(() => StatsWhereUniqueInput)
    where!: Prisma.AtLeast<StatsWhereUniqueInput, 'id'>;

    @Field(() => StatsCreateWithoutNaturesDecreasedInput, {nullable:false})
    @Type(() => StatsCreateWithoutNaturesDecreasedInput)
    create!: Identity<StatsCreateWithoutNaturesDecreasedInput>;
}
