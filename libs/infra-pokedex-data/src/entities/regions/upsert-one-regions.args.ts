import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { RegionsWhereUniqueInput } from './regions-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { RegionsCreateInput } from './regions-create.input';
import { RegionsUpdateInput } from './regions-update.input';

@ArgsType()
export class UpsertOneRegionsArgs {

    @Field(() => RegionsWhereUniqueInput, {nullable:false})
    @Type(() => RegionsWhereUniqueInput)
    where!: Prisma.AtLeast<RegionsWhereUniqueInput, 'id'>;

    @Field(() => RegionsCreateInput, {nullable:false})
    @Type(() => RegionsCreateInput)
    create!: Identity<RegionsCreateInput>;

    @Field(() => RegionsUpdateInput, {nullable:false})
    @Type(() => RegionsUpdateInput)
    update!: Identity<RegionsUpdateInput>;
}
