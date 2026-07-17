import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerriesWhereInput } from './berries-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyBerriesArgs {

    @Field(() => BerriesWhereInput, {nullable:true})
    @Type(() => BerriesWhereInput)
    where?: Identity<BerriesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
