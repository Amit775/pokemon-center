import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StatsCreateWithoutNaturesDecreasedInput } from './stats-create-without-natures-decreased.input';
import { Type } from 'class-transformer';
import { StatsCreateOrConnectWithoutNaturesDecreasedInput } from './stats-create-or-connect-without-natures-decreased.input';
import { StatsUpsertWithoutNaturesDecreasedInput } from './stats-upsert-without-natures-decreased.input';
import { Prisma } from '@prisma/client';
import { StatsWhereUniqueInput } from './stats-where-unique.input';
import { StatsUpdateToOneWithWhereWithoutNaturesDecreasedInput } from './stats-update-to-one-with-where-without-natures-decreased.input';

@InputType()
export class StatsUpdateOneRequiredWithoutNaturesDecreasedNestedInput {

    @Field(() => StatsCreateWithoutNaturesDecreasedInput, {nullable:true})
    @Type(() => StatsCreateWithoutNaturesDecreasedInput)
    create?: StatsCreateWithoutNaturesDecreasedInput;

    @Field(() => StatsCreateOrConnectWithoutNaturesDecreasedInput, {nullable:true})
    @Type(() => StatsCreateOrConnectWithoutNaturesDecreasedInput)
    connectOrCreate?: StatsCreateOrConnectWithoutNaturesDecreasedInput;

    @Field(() => StatsUpsertWithoutNaturesDecreasedInput, {nullable:true})
    @Type(() => StatsUpsertWithoutNaturesDecreasedInput)
    upsert?: StatsUpsertWithoutNaturesDecreasedInput;

    @Field(() => StatsWhereUniqueInput, {nullable:true})
    @Type(() => StatsWhereUniqueInput)
    connect?: Prisma.AtLeast<StatsWhereUniqueInput, 'id'>;

    @Field(() => StatsUpdateToOneWithWhereWithoutNaturesDecreasedInput, {nullable:true})
    @Type(() => StatsUpdateToOneWithWhereWithoutNaturesDecreasedInput)
    update?: StatsUpdateToOneWithWhereWithoutNaturesDecreasedInput;
}
