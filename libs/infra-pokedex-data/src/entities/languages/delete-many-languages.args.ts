import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LanguagesWhereInput } from './languages-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyLanguagesArgs {

    @Field(() => LanguagesWhereInput, {nullable:true})
    @Type(() => LanguagesWhereInput)
    where?: LanguagesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
