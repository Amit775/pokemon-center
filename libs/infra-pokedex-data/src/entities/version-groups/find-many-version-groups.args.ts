import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VersionGroupsWhereInput } from './version-groups-where.input';
import { Type } from 'class-transformer';
import { VersionGroupsOrderByWithRelationInput } from './version-groups-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VersionGroupsScalarFieldEnum } from './version-groups-scalar-field.enum';

@ArgsType()
export class FindManyVersionGroupsArgs {

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: VersionGroupsWhereInput;

    @Field(() => [VersionGroupsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VersionGroupsOrderByWithRelationInput>;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [VersionGroupsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${VersionGroupsScalarFieldEnum}`>;
}
