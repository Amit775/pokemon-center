import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RegionsWhereUniqueInput } from './regions-where-unique.input';
import { Type } from 'class-transformer';
import { RegionsCreateWithoutLocationsInput } from './regions-create-without-locations.input';

@InputType()
export class RegionsCreateOrConnectWithoutLocationsInput {

    @Field(() => RegionsWhereUniqueInput, {nullable:false})
    @Type(() => RegionsWhereUniqueInput)
    where!: Prisma.AtLeast<RegionsWhereUniqueInput, 'id'>;

    @Field(() => RegionsCreateWithoutLocationsInput, {nullable:false})
    @Type(() => RegionsCreateWithoutLocationsInput)
    create!: RegionsCreateWithoutLocationsInput;
}
