import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StatsWhereInput } from './stats-where.input';
import { Type } from 'class-transformer';
import { StatsUpdateWithoutCharacteristicsInput } from './stats-update-without-characteristics.input';

@InputType()
export class StatsUpdateToOneWithWhereWithoutCharacteristicsInput {

    @Field(() => StatsWhereInput, {nullable:true})
    @Type(() => StatsWhereInput)
    where?: StatsWhereInput;

    @Field(() => StatsUpdateWithoutCharacteristicsInput, {nullable:false})
    @Type(() => StatsUpdateWithoutCharacteristicsInput)
    data!: StatsUpdateWithoutCharacteristicsInput;
}
