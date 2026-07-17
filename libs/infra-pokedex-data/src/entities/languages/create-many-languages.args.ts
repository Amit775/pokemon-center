import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LanguagesCreateManyInput } from './languages-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyLanguagesArgs {

    @Field(() => [LanguagesCreateManyInput], {nullable:false})
    @Type(() => LanguagesCreateManyInput)
    data!: Array<LanguagesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
