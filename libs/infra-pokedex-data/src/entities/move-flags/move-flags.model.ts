import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { MoveFlagMap } from '../move-flag-map/move-flag-map.model';
import { MoveFlagsCount } from './move-flags-count.output';

/**
 * @@TypeGraphQL.type(name: "MoveFlag")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "MoveFlag")'})
export class MoveFlags {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [MoveFlagMap], {nullable:true})
    flagMap?: Array<MoveFlagMap>;

    @Field(() => MoveFlagsCount, {nullable:false})
    _count?: MoveFlagsCount;
}
