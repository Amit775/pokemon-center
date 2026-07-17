import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StatsUpdateWithoutNaturesDecreasedInput } from './stats-update-without-natures-decreased.input';
import { Type } from 'class-transformer';
import { StatsCreateWithoutNaturesDecreasedInput } from './stats-create-without-natures-decreased.input';
import { StatsWhereInput } from './stats-where.input';

@InputType()
export class StatsUpsertWithoutNaturesDecreasedInput {

    @Field(() => StatsUpdateWithoutNaturesDecreasedInput, {nullable:false})
    @Type(() => StatsUpdateWithoutNaturesDecreasedInput)
    update!: Identity<StatsUpdateWithoutNaturesDecreasedInput>;

    @Field(() => StatsCreateWithoutNaturesDecreasedInput, {nullable:false})
    @Type(() => StatsCreateWithoutNaturesDecreasedInput)
    create!: Identity<StatsCreateWithoutNaturesDecreasedInput>;

    @Field(() => StatsWhereInput, {nullable:true})
    @Type(() => StatsWhereInput)
    where?: Identity<StatsWhereInput>;
}
