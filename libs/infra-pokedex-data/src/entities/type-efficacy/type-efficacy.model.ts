import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Types } from '../types/types.model';

/**
 * @@TypeGraphQL.type(name: "TypeEfficacy")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "TypeEfficacy")'})
export class TypeEfficacy {

    @Field(() => Int, {nullable:false})
    damage_type_id!: number;

    @Field(() => Int, {nullable:false})
    target_type_id!: number;

    @Field(() => Int, {nullable:false})
    damage_factor!: number;

    @Field(() => Types, {nullable:false})
    damageType?: Types;

    @Field(() => Types, {nullable:false})
    targetType?: Types;
}
