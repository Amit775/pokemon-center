import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerryFlavorsWhereInput } from './berry-flavors-where.input';

@InputType()
export class BerryFlavorsListRelationFilter {

    @Field(() => BerryFlavorsWhereInput, {nullable:true})
    every?: Identity<BerryFlavorsWhereInput>;

    @Field(() => BerryFlavorsWhereInput, {nullable:true})
    some?: Identity<BerryFlavorsWhereInput>;

    @Field(() => BerryFlavorsWhereInput, {nullable:true})
    none?: Identity<BerryFlavorsWhereInput>;
}
