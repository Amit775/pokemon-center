import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegionsUpdateInput } from './regions-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { RegionsWhereUniqueInput } from './regions-where-unique.input';

@ArgsType()
export class UpdateOneRegionsArgs {

    @Field(() => RegionsUpdateInput, {nullable:false})
    @Type(() => RegionsUpdateInput)
    data!: RegionsUpdateInput;

    @Field(() => RegionsWhereUniqueInput, {nullable:false})
    @Type(() => RegionsWhereUniqueInput)
    where!: Prisma.AtLeast<RegionsWhereUniqueInput, 'id'>;
}
