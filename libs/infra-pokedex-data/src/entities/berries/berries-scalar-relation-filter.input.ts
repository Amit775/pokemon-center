import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerriesWhereInput } from './berries-where.input';

@InputType()
export class BerriesScalarRelationFilter {

    @Field(() => BerriesWhereInput, {nullable:true})
    is?: Identity<BerriesWhereInput>;

    @Field(() => BerriesWhereInput, {nullable:true})
    isNot?: Identity<BerriesWhereInput>;
}
