import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VersionGroupRegionsWhereInput } from './version-group-regions-where.input';
import { Type } from 'class-transformer';
import { VersionGroupRegionsOrderByWithRelationInput } from './version-group-regions-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VersionGroupRegionsWhereUniqueInput } from './version-group-regions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VersionGroupRegionsScalarFieldEnum } from './version-group-regions-scalar-field.enum';

@ArgsType()
export class FindFirstVersionGroupRegionsArgs {

    @Field(() => VersionGroupRegionsWhereInput, {nullable:true})
    @Type(() => VersionGroupRegionsWhereInput)
    where?: VersionGroupRegionsWhereInput;

    @Field(() => [VersionGroupRegionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VersionGroupRegionsOrderByWithRelationInput>;

    @Field(() => VersionGroupRegionsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VersionGroupRegionsWhereUniqueInput, 'version_group_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [VersionGroupRegionsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${VersionGroupRegionsScalarFieldEnum}`>;
}
