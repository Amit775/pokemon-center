import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Types } from '../types/types.model';
import { Generations } from '../generations/generations.model';

/**
 * @@TypeGraphQL.type(name: "TypeGameIndex")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "TypeGameIndex")'})
export class TypeGameIndices {

    @Field(() => Int, {nullable:false})
    type_id!: number;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => Types, {nullable:false})
    type?: Types;

    @Field(() => Generations, {nullable:false})
    generation?: Generations;
}
