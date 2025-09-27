import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionsWhereInput } from './regions-where.input';

@InputType()
export class RegionsNullableScalarRelationFilter {

    @Field(() => RegionsWhereInput, {nullable:true})
    is?: RegionsWhereInput;

    @Field(() => RegionsWhereInput, {nullable:true})
    isNot?: RegionsWhereInput;
}
