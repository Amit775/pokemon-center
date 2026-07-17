import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { GenerationsUpdateWithoutRegionInput } from './generations-update-without-region.input';
import { GenerationsCreateWithoutRegionInput } from './generations-create-without-region.input';

@InputType()
export class GenerationsUpsertWithWhereUniqueWithoutRegionInput {

    @Field(() => GenerationsWhereUniqueInput, {nullable:false})
    @Type(() => GenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsUpdateWithoutRegionInput, {nullable:false})
    @Type(() => GenerationsUpdateWithoutRegionInput)
    update!: Identity<GenerationsUpdateWithoutRegionInput>;

    @Field(() => GenerationsCreateWithoutRegionInput, {nullable:false})
    @Type(() => GenerationsCreateWithoutRegionInput)
    create!: Identity<GenerationsCreateWithoutRegionInput>;
}
