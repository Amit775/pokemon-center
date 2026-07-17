import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionsWhereInput } from './versions-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyVersionsArgs {

    @Field(() => VersionsWhereInput, {nullable:true})
    @Type(() => VersionsWhereInput)
    where?: Identity<VersionsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
