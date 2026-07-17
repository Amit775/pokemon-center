import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupRegionsUncheckedUpdateManyInput } from './version-group-regions-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { VersionGroupRegionsWhereInput } from './version-group-regions-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyVersionGroupRegionsArgs {

    @Field(() => VersionGroupRegionsUncheckedUpdateManyInput, {nullable:false})
    @Type(() => VersionGroupRegionsUncheckedUpdateManyInput)
    data!: Identity<VersionGroupRegionsUncheckedUpdateManyInput>;

    @Field(() => VersionGroupRegionsWhereInput, {nullable:true})
    @Type(() => VersionGroupRegionsWhereInput)
    where?: Identity<VersionGroupRegionsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
