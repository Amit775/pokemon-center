import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationsCreateWithoutAreasInput } from './locations-create-without-areas.input';
import { Type } from 'class-transformer';
import { LocationsCreateOrConnectWithoutAreasInput } from './locations-create-or-connect-without-areas.input';
import { LocationsUpsertWithoutAreasInput } from './locations-upsert-without-areas.input';
import { Prisma } from '@pokemon-center/prisma';
import { LocationsWhereUniqueInput } from './locations-where-unique.input';
import { LocationsUpdateToOneWithWhereWithoutAreasInput } from './locations-update-to-one-with-where-without-areas.input';

@InputType()
export class LocationsUpdateOneRequiredWithoutAreasNestedInput {

    @Field(() => LocationsCreateWithoutAreasInput, {nullable:true})
    @Type(() => LocationsCreateWithoutAreasInput)
    create?: Identity<LocationsCreateWithoutAreasInput>;

    @Field(() => LocationsCreateOrConnectWithoutAreasInput, {nullable:true})
    @Type(() => LocationsCreateOrConnectWithoutAreasInput)
    connectOrCreate?: Identity<LocationsCreateOrConnectWithoutAreasInput>;

    @Field(() => LocationsUpsertWithoutAreasInput, {nullable:true})
    @Type(() => LocationsUpsertWithoutAreasInput)
    upsert?: Identity<LocationsUpsertWithoutAreasInput>;

    @Field(() => LocationsWhereUniqueInput, {nullable:true})
    @Type(() => LocationsWhereUniqueInput)
    connect?: Prisma.AtLeast<LocationsWhereUniqueInput, 'id'>;

    @Field(() => LocationsUpdateToOneWithWhereWithoutAreasInput, {nullable:true})
    @Type(() => LocationsUpdateToOneWithWhereWithoutAreasInput)
    update?: Identity<LocationsUpdateToOneWithWhereWithoutAreasInput>;
}
