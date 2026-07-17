import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsCreateWithoutGenerationsInput } from './regions-create-without-generations.input';
import { Type } from 'class-transformer';
import { RegionsCreateOrConnectWithoutGenerationsInput } from './regions-create-or-connect-without-generations.input';
import { Prisma } from '@pokemon-center/prisma';
import { RegionsWhereUniqueInput } from './regions-where-unique.input';

@InputType()
export class RegionsCreateNestedOneWithoutGenerationsInput {

    @Field(() => RegionsCreateWithoutGenerationsInput, {nullable:true})
    @Type(() => RegionsCreateWithoutGenerationsInput)
    create?: Identity<RegionsCreateWithoutGenerationsInput>;

    @Field(() => RegionsCreateOrConnectWithoutGenerationsInput, {nullable:true})
    @Type(() => RegionsCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: Identity<RegionsCreateOrConnectWithoutGenerationsInput>;

    @Field(() => RegionsWhereUniqueInput, {nullable:true})
    @Type(() => RegionsWhereUniqueInput)
    connect?: Prisma.AtLeast<RegionsWhereUniqueInput, 'id'>;
}
