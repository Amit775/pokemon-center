import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypeEfficacyWhereInput } from './type-efficacy-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyTypeEfficacyArgs {

    @Field(() => TypeEfficacyWhereInput, {nullable:true})
    @Type(() => TypeEfficacyWhereInput)
    where?: Identity<TypeEfficacyWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
