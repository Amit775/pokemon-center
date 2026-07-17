import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypeEfficacyWhereInput } from './type-efficacy-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyTypeEfficacyArgs {

    @Field(() => TypeEfficacyWhereInput, {nullable:true})
    @Type(() => TypeEfficacyWhereInput)
    where?: TypeEfficacyWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
