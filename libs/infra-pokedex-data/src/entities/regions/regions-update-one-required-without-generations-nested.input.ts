import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsCreateWithoutGenerationsInput } from './regions-create-without-generations.input';
import { Type } from 'class-transformer';
import { RegionsCreateOrConnectWithoutGenerationsInput } from './regions-create-or-connect-without-generations.input';
import { RegionsUpsertWithoutGenerationsInput } from './regions-upsert-without-generations.input';
import { Prisma } from '@pokemon-center/prisma';
import { RegionsWhereUniqueInput } from './regions-where-unique.input';
import { RegionsUpdateToOneWithWhereWithoutGenerationsInput } from './regions-update-to-one-with-where-without-generations.input';

@InputType()
export class RegionsUpdateOneRequiredWithoutGenerationsNestedInput {

    @Field(() => RegionsCreateWithoutGenerationsInput, {nullable:true})
    @Type(() => RegionsCreateWithoutGenerationsInput)
    create?: Identity<RegionsCreateWithoutGenerationsInput>;

    @Field(() => RegionsCreateOrConnectWithoutGenerationsInput, {nullable:true})
    @Type(() => RegionsCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: Identity<RegionsCreateOrConnectWithoutGenerationsInput>;

    @Field(() => RegionsUpsertWithoutGenerationsInput, {nullable:true})
    @Type(() => RegionsUpsertWithoutGenerationsInput)
    upsert?: Identity<RegionsUpsertWithoutGenerationsInput>;

    @Field(() => RegionsWhereUniqueInput, {nullable:true})
    @Type(() => RegionsWhereUniqueInput)
    connect?: Prisma.AtLeast<RegionsWhereUniqueInput, 'id'>;

    @Field(() => RegionsUpdateToOneWithWhereWithoutGenerationsInput, {nullable:true})
    @Type(() => RegionsUpdateToOneWithWhereWithoutGenerationsInput)
    update?: Identity<RegionsUpdateToOneWithWhereWithoutGenerationsInput>;
}
