import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { RegionsWhereUniqueInput } from './regions-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { RegionsCreateWithoutGenerationsInput } from './regions-create-without-generations.input';

@InputType()
export class RegionsCreateOrConnectWithoutGenerationsInput {

    @Field(() => RegionsWhereUniqueInput, {nullable:false})
    @Type(() => RegionsWhereUniqueInput)
    where!: Prisma.AtLeast<RegionsWhereUniqueInput, 'id'>;

    @Field(() => RegionsCreateWithoutGenerationsInput, {nullable:false})
    @Type(() => RegionsCreateWithoutGenerationsInput)
    create!: Identity<RegionsCreateWithoutGenerationsInput>;
}
