import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveBattleStylesWhereInput } from './move-battle-styles-where.input';

@InputType()
export class MoveBattleStylesScalarRelationFilter {

    @Field(() => MoveBattleStylesWhereInput, {nullable:true})
    is?: Identity<MoveBattleStylesWhereInput>;

    @Field(() => MoveBattleStylesWhereInput, {nullable:true})
    isNot?: Identity<MoveBattleStylesWhereInput>;
}
