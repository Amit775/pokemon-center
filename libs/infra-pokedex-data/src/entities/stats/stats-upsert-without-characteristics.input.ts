import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StatsUpdateWithoutCharacteristicsInput } from './stats-update-without-characteristics.input';
import { Type } from 'class-transformer';
import { StatsCreateWithoutCharacteristicsInput } from './stats-create-without-characteristics.input';
import { StatsWhereInput } from './stats-where.input';

@InputType()
export class StatsUpsertWithoutCharacteristicsInput {

    @Field(() => StatsUpdateWithoutCharacteristicsInput, {nullable:false})
    @Type(() => StatsUpdateWithoutCharacteristicsInput)
    update!: StatsUpdateWithoutCharacteristicsInput;

    @Field(() => StatsCreateWithoutCharacteristicsInput, {nullable:false})
    @Type(() => StatsCreateWithoutCharacteristicsInput)
    create!: StatsCreateWithoutCharacteristicsInput;

    @Field(() => StatsWhereInput, {nullable:true})
    @Type(() => StatsWhereInput)
    where?: StatsWhereInput;
}
