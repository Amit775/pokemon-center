import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveBattleStylesWhereInput } from './move-battle-styles-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyMoveBattleStylesArgs {

    @Field(() => MoveBattleStylesWhereInput, {nullable:true})
    @Type(() => MoveBattleStylesWhereInput)
    where?: MoveBattleStylesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
