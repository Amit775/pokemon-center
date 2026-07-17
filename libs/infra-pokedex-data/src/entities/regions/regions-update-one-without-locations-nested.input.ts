import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionsCreateWithoutLocationsInput } from './regions-create-without-locations.input';
import { Type } from 'class-transformer';
import { RegionsCreateOrConnectWithoutLocationsInput } from './regions-create-or-connect-without-locations.input';
import { RegionsUpsertWithoutLocationsInput } from './regions-upsert-without-locations.input';
import { RegionsWhereInput } from './regions-where.input';
import { Prisma } from '@prisma/client';
import { RegionsWhereUniqueInput } from './regions-where-unique.input';
import { RegionsUpdateToOneWithWhereWithoutLocationsInput } from './regions-update-to-one-with-where-without-locations.input';

@InputType()
export class RegionsUpdateOneWithoutLocationsNestedInput {

    @Field(() => RegionsCreateWithoutLocationsInput, {nullable:true})
    @Type(() => RegionsCreateWithoutLocationsInput)
    create?: RegionsCreateWithoutLocationsInput;

    @Field(() => RegionsCreateOrConnectWithoutLocationsInput, {nullable:true})
    @Type(() => RegionsCreateOrConnectWithoutLocationsInput)
    connectOrCreate?: RegionsCreateOrConnectWithoutLocationsInput;

    @Field(() => RegionsUpsertWithoutLocationsInput, {nullable:true})
    @Type(() => RegionsUpsertWithoutLocationsInput)
    upsert?: RegionsUpsertWithoutLocationsInput;

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    disconnect?: RegionsWhereInput;

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    delete?: RegionsWhereInput;

    @Field(() => RegionsWhereUniqueInput, {nullable:true})
    @Type(() => RegionsWhereUniqueInput)
    connect?: Prisma.AtLeast<RegionsWhereUniqueInput, 'id'>;

    @Field(() => RegionsUpdateToOneWithWhereWithoutLocationsInput, {nullable:true})
    @Type(() => RegionsUpdateToOneWithWhereWithoutLocationsInput)
    update?: RegionsUpdateToOneWithWhereWithoutLocationsInput;
}
