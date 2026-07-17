import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Moves } from '../moves/moves.model';
import { BerryFlavors } from '../berry-flavors/berry-flavors.model';
import { ContestTypesCount } from './contest-types-count.output';
import type { Identity } from 'identity-type';

/**
 * @@TypeGraphQL.type(name: "ContestType")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "ContestType")'})
export class ContestTypes {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [Moves], {nullable:false})
    moves?: Array<Moves>;

    @Field(() => [BerryFlavors], {nullable:false})
    berryFlavors?: Array<BerryFlavors>;

    @Field(() => ContestTypesCount, {nullable:false})
    _count?: Identity<ContestTypesCount>;
}
