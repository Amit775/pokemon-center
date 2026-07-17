import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerriesCreateInput } from './berries-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBerriesArgs {

    @Field(() => BerriesCreateInput, {nullable:false})
    @Type(() => BerriesCreateInput)
    data!: Identity<BerriesCreateInput>;
}
