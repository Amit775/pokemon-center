import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaCategoriesCreateInput } from './move-meta-categories-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMoveMetaCategoriesArgs {

    @Field(() => MoveMetaCategoriesCreateInput, {nullable:false})
    @Type(() => MoveMetaCategoriesCreateInput)
    data!: Identity<MoveMetaCategoriesCreateInput>;
}
