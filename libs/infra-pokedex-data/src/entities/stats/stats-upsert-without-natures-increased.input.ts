import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StatsUpdateWithoutNaturesIncreasedInput } from './stats-update-without-natures-increased.input';
import { Type } from 'class-transformer';
import { StatsCreateWithoutNaturesIncreasedInput } from './stats-create-without-natures-increased.input';
import { StatsWhereInput } from './stats-where.input';

@InputType()
export class StatsUpsertWithoutNaturesIncreasedInput {

    @Field(() => StatsUpdateWithoutNaturesIncreasedInput, {nullable:false})
    @Type(() => StatsUpdateWithoutNaturesIncreasedInput)
    update!: StatsUpdateWithoutNaturesIncreasedInput;

    @Field(() => StatsCreateWithoutNaturesIncreasedInput, {nullable:false})
    @Type(() => StatsCreateWithoutNaturesIncreasedInput)
    create!: StatsCreateWithoutNaturesIncreasedInput;

    @Field(() => StatsWhereInput, {nullable:true})
    @Type(() => StatsWhereInput)
    where?: StatsWhereInput;
}
