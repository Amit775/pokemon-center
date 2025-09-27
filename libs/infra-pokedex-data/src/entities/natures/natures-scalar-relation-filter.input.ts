import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NaturesWhereInput } from './natures-where.input';

@InputType()
export class NaturesScalarRelationFilter {

    @Field(() => NaturesWhereInput, {nullable:true})
    is?: NaturesWhereInput;

    @Field(() => NaturesWhereInput, {nullable:true})
    isNot?: NaturesWhereInput;
}
