import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StatsWhereInput } from './stats-where.input';
import { Type } from 'class-transformer';
import { StatsUpdateWithoutNaturesIncreasedInput } from './stats-update-without-natures-increased.input';

@InputType()
export class StatsUpdateToOneWithWhereWithoutNaturesIncreasedInput {

    @Field(() => StatsWhereInput, {nullable:true})
    @Type(() => StatsWhereInput)
    where?: Identity<StatsWhereInput>;

    @Field(() => StatsUpdateWithoutNaturesIncreasedInput, {nullable:false})
    @Type(() => StatsUpdateWithoutNaturesIncreasedInput)
    data!: Identity<StatsUpdateWithoutNaturesIncreasedInput>;
}
