import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerryFirmnessWhereInput } from './berry-firmness-where.input';

@InputType()
export class BerryFirmnessScalarRelationFilter {

    @Field(() => BerryFirmnessWhereInput, {nullable:true})
    is?: BerryFirmnessWhereInput;

    @Field(() => BerryFirmnessWhereInput, {nullable:true})
    isNot?: BerryFirmnessWhereInput;
}
