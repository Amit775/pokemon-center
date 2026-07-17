import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StatsWhereInput } from './stats-where.input';
import { Type } from 'class-transformer';
import { StatsUpdateWithoutNaturesDecreasedInput } from './stats-update-without-natures-decreased.input';

@InputType()
export class StatsUpdateToOneWithWhereWithoutNaturesDecreasedInput {

    @Field(() => StatsWhereInput, {nullable:true})
    @Type(() => StatsWhereInput)
    where?: StatsWhereInput;

    @Field(() => StatsUpdateWithoutNaturesDecreasedInput, {nullable:false})
    @Type(() => StatsUpdateWithoutNaturesDecreasedInput)
    data!: StatsUpdateWithoutNaturesDecreasedInput;
}
