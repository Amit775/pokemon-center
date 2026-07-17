import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsWhereInput } from './regions-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyRegionsArgs {

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    where?: Identity<RegionsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
