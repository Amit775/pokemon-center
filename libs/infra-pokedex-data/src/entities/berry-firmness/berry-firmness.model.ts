import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Berries } from '../berries/berries.model';
import { BerryFirmnessCount } from './berry-firmness-count.output';

/**
 * @@TypeGraphQL.type(name: "BerryFirmness")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "BerryFirmness")'})
export class BerryFirmness {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [Berries], {nullable:true})
    berries?: Array<Berries>;

    @Field(() => BerryFirmnessCount, {nullable:false})
    _count?: BerryFirmnessCount;
}
