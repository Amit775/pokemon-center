import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerryFirmnessWhereInput } from './berry-firmness-where.input';

@InputType()
export class BerryFirmnessScalarRelationFilter {

    @Field(() => BerryFirmnessWhereInput, {nullable:true})
    is?: Identity<BerryFirmnessWhereInput>;

    @Field(() => BerryFirmnessWhereInput, {nullable:true})
    isNot?: Identity<BerryFirmnessWhereInput>;
}
