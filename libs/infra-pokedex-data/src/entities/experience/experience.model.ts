import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GrowthRates } from '../growth-rates/growth-rates.model';
import type { Identity } from 'identity-type';

@ObjectType()
export class Experience {

    @Field(() => Int, {nullable:false})
    growth_rate_id!: number;

    @Field(() => Int, {nullable:false})
    level!: number;

    @Field(() => Int, {nullable:false})
    experience!: number;

    @Field(() => GrowthRates, {nullable:false})
    growthRate?: Identity<GrowthRates>;
}
