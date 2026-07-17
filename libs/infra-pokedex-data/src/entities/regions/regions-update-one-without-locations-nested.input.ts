import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsCreateWithoutLocationsInput } from './regions-create-without-locations.input';
import { Type } from 'class-transformer';
import { RegionsCreateOrConnectWithoutLocationsInput } from './regions-create-or-connect-without-locations.input';
import { RegionsUpsertWithoutLocationsInput } from './regions-upsert-without-locations.input';
import { RegionsWhereInput } from './regions-where.input';
import { Prisma } from '@pokemon-center/prisma';
import { RegionsWhereUniqueInput } from './regions-where-unique.input';
import { RegionsUpdateToOneWithWhereWithoutLocationsInput } from './regions-update-to-one-with-where-without-locations.input';

@InputType()
export class RegionsUpdateOneWithoutLocationsNestedInput {

    @Field(() => RegionsCreateWithoutLocationsInput, {nullable:true})
    @Type(() => RegionsCreateWithoutLocationsInput)
    create?: Identity<RegionsCreateWithoutLocationsInput>;

    @Field(() => RegionsCreateOrConnectWithoutLocationsInput, {nullable:true})
    @Type(() => RegionsCreateOrConnectWithoutLocationsInput)
    connectOrCreate?: Identity<RegionsCreateOrConnectWithoutLocationsInput>;

    @Field(() => RegionsUpsertWithoutLocationsInput, {nullable:true})
    @Type(() => RegionsUpsertWithoutLocationsInput)
    upsert?: Identity<RegionsUpsertWithoutLocationsInput>;

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    disconnect?: Identity<RegionsWhereInput>;

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    delete?: Identity<RegionsWhereInput>;

    @Field(() => RegionsWhereUniqueInput, {nullable:true})
    @Type(() => RegionsWhereUniqueInput)
    connect?: Prisma.AtLeast<RegionsWhereUniqueInput, 'id'>;

    @Field(() => RegionsUpdateToOneWithWhereWithoutLocationsInput, {nullable:true})
    @Type(() => RegionsUpdateToOneWithWhereWithoutLocationsInput)
    update?: Identity<RegionsUpdateToOneWithWhereWithoutLocationsInput>;
}
