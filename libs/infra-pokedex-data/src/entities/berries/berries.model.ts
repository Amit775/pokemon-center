import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Items } from '../items/items.model';
import { BerryFirmness } from '../berry-firmness/berry-firmness.model';
import { Types } from '../types/types.model';
import { BerryFlavors } from '../berry-flavors/berry-flavors.model';
import { BerriesCount } from './berries-count.output';

/**
 * @@TypeGraphQL.type(name: "Berry")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "Berry")'})
export class Berries {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    item_id!: number;

    @Field(() => Int, {nullable:false})
    firmness_id!: number;

    @Field(() => Int, {nullable:true})
    natural_gift_power!: number | null;

    @Field(() => Int, {nullable:true})
    natural_gift_type_id!: number | null;

    @Field(() => Int, {nullable:false})
    size!: number;

    @Field(() => Int, {nullable:false})
    max_harvest!: number;

    @Field(() => Int, {nullable:false})
    growth_time!: number;

    @Field(() => Int, {nullable:false})
    soil_dryness!: number;

    @Field(() => Int, {nullable:false})
    smoothness!: number;

    @Field(() => Items, {nullable:false})
    item?: Items;

    @Field(() => BerryFirmness, {nullable:false})
    firmness?: BerryFirmness;

    @Field(() => Types, {nullable:true})
    naturalGiftType?: Types | null;

    @Field(() => [BerryFlavors], {nullable:true})
    flavors?: Array<BerryFlavors>;

    @Field(() => BerriesCount, {nullable:false})
    _count?: BerriesCount;
}
