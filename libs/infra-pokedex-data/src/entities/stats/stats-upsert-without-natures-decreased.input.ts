import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StatsUpdateWithoutNaturesDecreasedInput } from './stats-update-without-natures-decreased.input';
import { Type } from 'class-transformer';
import { StatsCreateWithoutNaturesDecreasedInput } from './stats-create-without-natures-decreased.input';
import { StatsWhereInput } from './stats-where.input';

@InputType()
export class StatsUpsertWithoutNaturesDecreasedInput {

    @Field(() => StatsUpdateWithoutNaturesDecreasedInput, {nullable:false})
    @Type(() => StatsUpdateWithoutNaturesDecreasedInput)
    update!: StatsUpdateWithoutNaturesDecreasedInput;

    @Field(() => StatsCreateWithoutNaturesDecreasedInput, {nullable:false})
    @Type(() => StatsCreateWithoutNaturesDecreasedInput)
    create!: StatsCreateWithoutNaturesDecreasedInput;

    @Field(() => StatsWhereInput, {nullable:true})
    @Type(() => StatsWhereInput)
    where?: StatsWhereInput;
}
