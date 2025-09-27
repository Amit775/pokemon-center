import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveBattleStylesWhereInput } from './move-battle-styles-where.input';

@InputType()
export class MoveBattleStylesScalarRelationFilter {

    @Field(() => MoveBattleStylesWhereInput, {nullable:true})
    is?: MoveBattleStylesWhereInput;

    @Field(() => MoveBattleStylesWhereInput, {nullable:true})
    isNot?: MoveBattleStylesWhereInput;
}
