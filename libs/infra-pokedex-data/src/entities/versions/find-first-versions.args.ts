import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionsWhereInput } from './versions-where.input';
import { Type } from 'class-transformer';
import { VersionsOrderByWithRelationInput } from './versions-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VersionsScalarFieldEnum } from './versions-scalar-field.enum';

@ArgsType()
export class FindFirstVersionsArgs {

    @Field(() => VersionsWhereInput, {nullable:true})
    @Type(() => VersionsWhereInput)
    where?: Identity<VersionsWhereInput>;

    @Field(() => [VersionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VersionsOrderByWithRelationInput>;

    @Field(() => VersionsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [VersionsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${VersionsScalarFieldEnum}`>;
}
