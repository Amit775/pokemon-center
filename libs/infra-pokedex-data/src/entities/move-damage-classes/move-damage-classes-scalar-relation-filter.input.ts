import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveDamageClassesWhereInput } from './move-damage-classes-where.input';

@InputType()
export class MoveDamageClassesScalarRelationFilter {

    @Field(() => MoveDamageClassesWhereInput, {nullable:true})
    is?: Identity<MoveDamageClassesWhereInput>;

    @Field(() => MoveDamageClassesWhereInput, {nullable:true})
    isNot?: Identity<MoveDamageClassesWhereInput>;
}
