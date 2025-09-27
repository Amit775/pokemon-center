import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerryFlavorsWhereInput } from './berry-flavors-where.input';

@InputType()
export class BerryFlavorsListRelationFilter {

    @Field(() => BerryFlavorsWhereInput, {nullable:true})
    every?: BerryFlavorsWhereInput;

    @Field(() => BerryFlavorsWhereInput, {nullable:true})
    some?: BerryFlavorsWhereInput;

    @Field(() => BerryFlavorsWhereInput, {nullable:true})
    none?: BerryFlavorsWhereInput;
}
