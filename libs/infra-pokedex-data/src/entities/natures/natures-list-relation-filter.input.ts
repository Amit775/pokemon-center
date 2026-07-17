import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NaturesWhereInput } from './natures-where.input';

@InputType()
export class NaturesListRelationFilter {

    @Field(() => NaturesWhereInput, {nullable:true})
    every?: Identity<NaturesWhereInput>;

    @Field(() => NaturesWhereInput, {nullable:true})
    some?: Identity<NaturesWhereInput>;

    @Field(() => NaturesWhereInput, {nullable:true})
    none?: Identity<NaturesWhereInput>;
}
