import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionsCreateWithoutLocationsInput } from './regions-create-without-locations.input';
import { Type } from 'class-transformer';
import { RegionsCreateOrConnectWithoutLocationsInput } from './regions-create-or-connect-without-locations.input';
import { Prisma } from '@prisma/client';
import { RegionsWhereUniqueInput } from './regions-where-unique.input';

@InputType()
export class RegionsCreateNestedOneWithoutLocationsInput {

    @Field(() => RegionsCreateWithoutLocationsInput, {nullable:true})
    @Type(() => RegionsCreateWithoutLocationsInput)
    create?: RegionsCreateWithoutLocationsInput;

    @Field(() => RegionsCreateOrConnectWithoutLocationsInput, {nullable:true})
    @Type(() => RegionsCreateOrConnectWithoutLocationsInput)
    connectOrCreate?: RegionsCreateOrConnectWithoutLocationsInput;

    @Field(() => RegionsWhereUniqueInput, {nullable:true})
    @Type(() => RegionsWhereUniqueInput)
    connect?: Prisma.AtLeast<RegionsWhereUniqueInput, 'id'>;
}
