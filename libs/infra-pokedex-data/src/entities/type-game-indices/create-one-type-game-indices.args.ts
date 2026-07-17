import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypeGameIndicesCreateInput } from './type-game-indices-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTypeGameIndicesArgs {

    @Field(() => TypeGameIndicesCreateInput, {nullable:false})
    @Type(() => TypeGameIndicesCreateInput)
    data!: Identity<TypeGameIndicesCreateInput>;
}
