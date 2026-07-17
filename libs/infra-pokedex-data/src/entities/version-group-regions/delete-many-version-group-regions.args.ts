import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VersionGroupRegionsWhereInput } from './version-group-regions-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyVersionGroupRegionsArgs {

    @Field(() => VersionGroupRegionsWhereInput, {nullable:true})
    @Type(() => VersionGroupRegionsWhereInput)
    where?: VersionGroupRegionsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
