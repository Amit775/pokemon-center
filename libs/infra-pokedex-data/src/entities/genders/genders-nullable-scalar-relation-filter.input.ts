import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GendersWhereInput } from './genders-where.input';

@InputType()
export class GendersNullableScalarRelationFilter {

    @Field(() => GendersWhereInput, {nullable:true})
    is?: GendersWhereInput;

    @Field(() => GendersWhereInput, {nullable:true})
    isNot?: GendersWhereInput;
}
