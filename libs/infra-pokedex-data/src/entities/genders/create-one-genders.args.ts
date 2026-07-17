import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GendersCreateInput } from './genders-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGendersArgs {

    @Field(() => GendersCreateInput, {nullable:false})
    @Type(() => GendersCreateInput)
    data!: Identity<GendersCreateInput>;
}
