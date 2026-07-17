import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StatsUpdateWithoutNaturesIncreasedInput } from './stats-update-without-natures-increased.input';
import { Type } from 'class-transformer';
import { StatsCreateWithoutNaturesIncreasedInput } from './stats-create-without-natures-increased.input';
import { StatsWhereInput } from './stats-where.input';

@InputType()
export class StatsUpsertWithoutNaturesIncreasedInput {

    @Field(() => StatsUpdateWithoutNaturesIncreasedInput, {nullable:false})
    @Type(() => StatsUpdateWithoutNaturesIncreasedInput)
    update!: Identity<StatsUpdateWithoutNaturesIncreasedInput>;

    @Field(() => StatsCreateWithoutNaturesIncreasedInput, {nullable:false})
    @Type(() => StatsCreateWithoutNaturesIncreasedInput)
    create!: Identity<StatsCreateWithoutNaturesIncreasedInput>;

    @Field(() => StatsWhereInput, {nullable:true})
    @Type(() => StatsWhereInput)
    where?: Identity<StatsWhereInput>;
}
