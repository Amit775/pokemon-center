import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import { GenerationsCreateWithoutRegionInput } from './generations-create-without-region.input';

@InputType()
export class GenerationsCreateOrConnectWithoutRegionInput {

    @Field(() => GenerationsWhereUniqueInput, {nullable:false})
    @Type(() => GenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsCreateWithoutRegionInput, {nullable:false})
    @Type(() => GenerationsCreateWithoutRegionInput)
    create!: GenerationsCreateWithoutRegionInput;
}
