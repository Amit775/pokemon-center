import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GendersWhereInput } from './genders-where.input';

@InputType()
export class GendersScalarRelationFilter {

    @Field(() => GendersWhereInput, {nullable:true})
    is?: Identity<GendersWhereInput>;

    @Field(() => GendersWhereInput, {nullable:true})
    isNot?: Identity<GendersWhereInput>;
}
