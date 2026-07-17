import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacteristicsCreateWithoutStatInput } from './characteristics-create-without-stat.input';
import { Type } from 'class-transformer';
import { CharacteristicsCreateOrConnectWithoutStatInput } from './characteristics-create-or-connect-without-stat.input';
import type { Identity } from 'identity-type';
import { CharacteristicsCreateManyStatInputEnvelope } from './characteristics-create-many-stat-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { CharacteristicsWhereUniqueInput } from './characteristics-where-unique.input';

@InputType()
export class CharacteristicsUncheckedCreateNestedManyWithoutStatInput {

    @Field(() => [CharacteristicsCreateWithoutStatInput], {nullable:true})
    @Type(() => CharacteristicsCreateWithoutStatInput)
    create?: Array<CharacteristicsCreateWithoutStatInput>;

    @Field(() => [CharacteristicsCreateOrConnectWithoutStatInput], {nullable:true})
    @Type(() => CharacteristicsCreateOrConnectWithoutStatInput)
    connectOrCreate?: Array<CharacteristicsCreateOrConnectWithoutStatInput>;

    @Field(() => CharacteristicsCreateManyStatInputEnvelope, {nullable:true})
    @Type(() => CharacteristicsCreateManyStatInputEnvelope)
    createMany?: Identity<CharacteristicsCreateManyStatInputEnvelope>;

    @Field(() => [CharacteristicsWhereUniqueInput], {nullable:true})
    @Type(() => CharacteristicsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CharacteristicsWhereUniqueInput, 'id'>>;
}
