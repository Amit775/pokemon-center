import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LanguagesUpdateManyMutationInput } from './languages-update-many-mutation.input';
import { Type } from 'class-transformer';
import { LanguagesWhereInput } from './languages-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyLanguagesArgs {

    @Field(() => LanguagesUpdateManyMutationInput, {nullable:false})
    @Type(() => LanguagesUpdateManyMutationInput)
    data!: LanguagesUpdateManyMutationInput;

    @Field(() => LanguagesWhereInput, {nullable:true})
    @Type(() => LanguagesWhereInput)
    where?: LanguagesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
