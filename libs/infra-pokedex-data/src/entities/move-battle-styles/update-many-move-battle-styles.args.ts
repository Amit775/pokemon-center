import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveBattleStylesUpdateManyMutationInput } from './move-battle-styles-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MoveBattleStylesWhereInput } from './move-battle-styles-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyMoveBattleStylesArgs {

    @Field(() => MoveBattleStylesUpdateManyMutationInput, {nullable:false})
    @Type(() => MoveBattleStylesUpdateManyMutationInput)
    data!: MoveBattleStylesUpdateManyMutationInput;

    @Field(() => MoveBattleStylesWhereInput, {nullable:true})
    @Type(() => MoveBattleStylesWhereInput)
    where?: MoveBattleStylesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
