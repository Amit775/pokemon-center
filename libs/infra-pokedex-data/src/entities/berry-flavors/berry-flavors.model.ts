import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Berries } from '../berries/berries.model';
import { ContestTypes } from '../contest-types/contest-types.model';
import { Types } from '../types/types.model';

/**
 * @@TypeGraphQL.type(name: "BerryFlavor")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "BerryFlavor")'})
export class BerryFlavors {

    @Field(() => Int, {nullable:false})
    berry_id!: number;

    @Field(() => Int, {nullable:false})
    contest_type_id!: number;

    @Field(() => Int, {nullable:false})
    flavor!: number;

    @Field(() => Berries, {nullable:false})
    berry?: Berries;

    @Field(() => ContestTypes, {nullable:false})
    contestType?: ContestTypes;

    @Field(() => Types, {nullable:false})
    type?: Types;
}
