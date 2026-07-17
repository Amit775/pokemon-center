import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RegionsWhereUniqueInput } from './regions-where-unique.input';
import { Type } from 'class-transformer';
import { RegionsCreateInput } from './regions-create.input';
import { RegionsUpdateInput } from './regions-update.input';

@ArgsType()
export class UpsertOneRegionsArgs {

    @Field(() => RegionsWhereUniqueInput, {nullable:false})
    @Type(() => RegionsWhereUniqueInput)
    where!: Prisma.AtLeast<RegionsWhereUniqueInput, 'id'>;

    @Field(() => RegionsCreateInput, {nullable:false})
    @Type(() => RegionsCreateInput)
    create!: RegionsCreateInput;

    @Field(() => RegionsUpdateInput, {nullable:false})
    @Type(() => RegionsUpdateInput)
    update!: RegionsUpdateInput;
}
