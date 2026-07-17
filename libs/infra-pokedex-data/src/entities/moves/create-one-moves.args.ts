import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesCreateInput } from './moves-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMovesArgs {

    @Field(() => MovesCreateInput, {nullable:false})
    @Type(() => MovesCreateInput)
    data!: Identity<MovesCreateInput>;
}
