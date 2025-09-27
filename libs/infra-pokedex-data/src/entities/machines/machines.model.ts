import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VersionGroups } from '../version-groups/version-groups.model';
import { Items } from '../items/items.model';
import { Moves } from '../moves/moves.model';

/**
 * @@TypeGraphQL.type(name: "Machine")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "Machine")'})
export class Machines {

    @Field(() => Int, {nullable:false})
    machine_number!: number;

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => Int, {nullable:false})
    item_id!: number;

    @Field(() => Int, {nullable:false})
    move_id!: number;

    @Field(() => VersionGroups, {nullable:false})
    versionGroup?: VersionGroups;

    @Field(() => Items, {nullable:false})
    item?: Items;

    @Field(() => Moves, {nullable:false})
    move?: Moves;
}
