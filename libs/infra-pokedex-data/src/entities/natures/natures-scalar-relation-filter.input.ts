import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NaturesWhereInput } from './natures-where.input';

@InputType()
export class NaturesScalarRelationFilter {

    @Field(() => NaturesWhereInput, {nullable:true})
    is?: Identity<NaturesWhereInput>;

    @Field(() => NaturesWhereInput, {nullable:true})
    isNot?: Identity<NaturesWhereInput>;
}
