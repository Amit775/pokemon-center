import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsCreateWithoutLocationsInput } from './regions-create-without-locations.input';
import { Type } from 'class-transformer';
import { RegionsCreateOrConnectWithoutLocationsInput } from './regions-create-or-connect-without-locations.input';
import { Prisma } from '@pokemon-center/prisma';
import { RegionsWhereUniqueInput } from './regions-where-unique.input';

@InputType()
export class RegionsCreateNestedOneWithoutLocationsInput {

    @Field(() => RegionsCreateWithoutLocationsInput, {nullable:true})
    @Type(() => RegionsCreateWithoutLocationsInput)
    create?: Identity<RegionsCreateWithoutLocationsInput>;

    @Field(() => RegionsCreateOrConnectWithoutLocationsInput, {nullable:true})
    @Type(() => RegionsCreateOrConnectWithoutLocationsInput)
    connectOrCreate?: Identity<RegionsCreateOrConnectWithoutLocationsInput>;

    @Field(() => RegionsWhereUniqueInput, {nullable:true})
    @Type(() => RegionsWhereUniqueInput)
    connect?: Prisma.AtLeast<RegionsWhereUniqueInput, 'id'>;
}
