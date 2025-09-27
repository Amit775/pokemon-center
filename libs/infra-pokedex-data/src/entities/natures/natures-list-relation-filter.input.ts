import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NaturesWhereInput } from './natures-where.input';

@InputType()
export class NaturesListRelationFilter {

    @Field(() => NaturesWhereInput, {nullable:true})
    every?: NaturesWhereInput;

    @Field(() => NaturesWhereInput, {nullable:true})
    some?: NaturesWhereInput;

    @Field(() => NaturesWhereInput, {nullable:true})
    none?: NaturesWhereInput;
}
