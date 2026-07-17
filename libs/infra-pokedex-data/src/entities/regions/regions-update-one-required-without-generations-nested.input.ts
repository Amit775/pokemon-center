import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionsCreateWithoutGenerationsInput } from './regions-create-without-generations.input';
import { Type } from 'class-transformer';
import { RegionsCreateOrConnectWithoutGenerationsInput } from './regions-create-or-connect-without-generations.input';
import { RegionsUpsertWithoutGenerationsInput } from './regions-upsert-without-generations.input';
import { Prisma } from '@prisma/client';
import { RegionsWhereUniqueInput } from './regions-where-unique.input';
import { RegionsUpdateToOneWithWhereWithoutGenerationsInput } from './regions-update-to-one-with-where-without-generations.input';

@InputType()
export class RegionsUpdateOneRequiredWithoutGenerationsNestedInput {

    @Field(() => RegionsCreateWithoutGenerationsInput, {nullable:true})
    @Type(() => RegionsCreateWithoutGenerationsInput)
    create?: RegionsCreateWithoutGenerationsInput;

    @Field(() => RegionsCreateOrConnectWithoutGenerationsInput, {nullable:true})
    @Type(() => RegionsCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: RegionsCreateOrConnectWithoutGenerationsInput;

    @Field(() => RegionsUpsertWithoutGenerationsInput, {nullable:true})
    @Type(() => RegionsUpsertWithoutGenerationsInput)
    upsert?: RegionsUpsertWithoutGenerationsInput;

    @Field(() => RegionsWhereUniqueInput, {nullable:true})
    @Type(() => RegionsWhereUniqueInput)
    connect?: Prisma.AtLeast<RegionsWhereUniqueInput, 'id'>;

    @Field(() => RegionsUpdateToOneWithWhereWithoutGenerationsInput, {nullable:true})
    @Type(() => RegionsUpdateToOneWithWhereWithoutGenerationsInput)
    update?: RegionsUpdateToOneWithWhereWithoutGenerationsInput;
}
