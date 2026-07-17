import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveBattleStylesCreateInput } from './move-battle-styles-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMoveBattleStylesArgs {

    @Field(() => MoveBattleStylesCreateInput, {nullable:false})
    @Type(() => MoveBattleStylesCreateInput)
    data!: MoveBattleStylesCreateInput;
}
