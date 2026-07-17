import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LanguagesCreateInput } from './languages-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneLanguagesArgs {

    @Field(() => LanguagesCreateInput, {nullable:false})
    @Type(() => LanguagesCreateInput)
    data!: Identity<LanguagesCreateInput>;
}
