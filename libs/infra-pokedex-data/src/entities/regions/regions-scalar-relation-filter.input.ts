import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsWhereInput } from './regions-where.input';

@InputType()
export class RegionsScalarRelationFilter {

    @Field(() => RegionsWhereInput, {nullable:true})
    is?: Identity<RegionsWhereInput>;

    @Field(() => RegionsWhereInput, {nullable:true})
    isNot?: Identity<RegionsWhereInput>;
}
