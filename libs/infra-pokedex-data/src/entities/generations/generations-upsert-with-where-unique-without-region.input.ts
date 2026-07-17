import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import { GenerationsUpdateWithoutRegionInput } from './generations-update-without-region.input';
import { GenerationsCreateWithoutRegionInput } from './generations-create-without-region.input';

@InputType()
export class GenerationsUpsertWithWhereUniqueWithoutRegionInput {

    @Field(() => GenerationsWhereUniqueInput, {nullable:false})
    @Type(() => GenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsUpdateWithoutRegionInput, {nullable:false})
    @Type(() => GenerationsUpdateWithoutRegionInput)
    update!: GenerationsUpdateWithoutRegionInput;

    @Field(() => GenerationsCreateWithoutRegionInput, {nullable:false})
    @Type(() => GenerationsCreateWithoutRegionInput)
    create!: GenerationsCreateWithoutRegionInput;
}
