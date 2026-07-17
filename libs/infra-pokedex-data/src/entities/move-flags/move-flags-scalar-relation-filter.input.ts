import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveFlagsWhereInput } from './move-flags-where.input';

@InputType()
export class MoveFlagsScalarRelationFilter {

    @Field(() => MoveFlagsWhereInput, {nullable:true})
    is?: Identity<MoveFlagsWhereInput>;

    @Field(() => MoveFlagsWhereInput, {nullable:true})
    isNot?: Identity<MoveFlagsWhereInput>;
}
