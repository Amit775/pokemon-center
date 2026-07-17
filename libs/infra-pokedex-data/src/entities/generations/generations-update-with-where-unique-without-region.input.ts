import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { GenerationsUpdateWithoutRegionInput } from './generations-update-without-region.input';

@InputType()
export class GenerationsUpdateWithWhereUniqueWithoutRegionInput {

    @Field(() => GenerationsWhereUniqueInput, {nullable:false})
    @Type(() => GenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsUpdateWithoutRegionInput, {nullable:false})
    @Type(() => GenerationsUpdateWithoutRegionInput)
    data!: Identity<GenerationsUpdateWithoutRegionInput>;
}
