import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LanguagesUpdateManyMutationInput } from './languages-update-many-mutation.input';
import { Type } from 'class-transformer';
import { LanguagesWhereInput } from './languages-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyLanguagesArgs {

    @Field(() => LanguagesUpdateManyMutationInput, {nullable:false})
    @Type(() => LanguagesUpdateManyMutationInput)
    data!: Identity<LanguagesUpdateManyMutationInput>;

    @Field(() => LanguagesWhereInput, {nullable:true})
    @Type(() => LanguagesWhereInput)
    where?: Identity<LanguagesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
