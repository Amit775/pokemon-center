import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveFlagMapWhereInput } from './move-flag-map-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyMoveFlagMapArgs {

    @Field(() => MoveFlagMapWhereInput, {nullable:true})
    @Type(() => MoveFlagMapWhereInput)
    where?: Identity<MoveFlagMapWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
