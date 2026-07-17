import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GendersWhereInput } from './genders-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyGendersArgs {

    @Field(() => GendersWhereInput, {nullable:true})
    @Type(() => GendersWhereInput)
    where?: Identity<GendersWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
