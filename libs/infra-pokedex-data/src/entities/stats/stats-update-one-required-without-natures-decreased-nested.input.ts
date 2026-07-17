import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StatsCreateWithoutNaturesDecreasedInput } from './stats-create-without-natures-decreased.input';
import { Type } from 'class-transformer';
import { StatsCreateOrConnectWithoutNaturesDecreasedInput } from './stats-create-or-connect-without-natures-decreased.input';
import { StatsUpsertWithoutNaturesDecreasedInput } from './stats-upsert-without-natures-decreased.input';
import { Prisma } from '@pokemon-center/prisma';
import { StatsWhereUniqueInput } from './stats-where-unique.input';
import { StatsUpdateToOneWithWhereWithoutNaturesDecreasedInput } from './stats-update-to-one-with-where-without-natures-decreased.input';

@InputType()
export class StatsUpdateOneRequiredWithoutNaturesDecreasedNestedInput {

    @Field(() => StatsCreateWithoutNaturesDecreasedInput, {nullable:true})
    @Type(() => StatsCreateWithoutNaturesDecreasedInput)
    create?: Identity<StatsCreateWithoutNaturesDecreasedInput>;

    @Field(() => StatsCreateOrConnectWithoutNaturesDecreasedInput, {nullable:true})
    @Type(() => StatsCreateOrConnectWithoutNaturesDecreasedInput)
    connectOrCreate?: Identity<StatsCreateOrConnectWithoutNaturesDecreasedInput>;

    @Field(() => StatsUpsertWithoutNaturesDecreasedInput, {nullable:true})
    @Type(() => StatsUpsertWithoutNaturesDecreasedInput)
    upsert?: Identity<StatsUpsertWithoutNaturesDecreasedInput>;

    @Field(() => StatsWhereUniqueInput, {nullable:true})
    @Type(() => StatsWhereUniqueInput)
    connect?: Prisma.AtLeast<StatsWhereUniqueInput, 'id'>;

    @Field(() => StatsUpdateToOneWithWhereWithoutNaturesDecreasedInput, {nullable:true})
    @Type(() => StatsUpdateToOneWithWhereWithoutNaturesDecreasedInput)
    update?: Identity<StatsUpdateToOneWithWhereWithoutNaturesDecreasedInput>;
}
