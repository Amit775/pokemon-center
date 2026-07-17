import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacteristicsCreateWithoutStatInput } from './characteristics-create-without-stat.input';
import { Type } from 'class-transformer';
import { CharacteristicsCreateOrConnectWithoutStatInput } from './characteristics-create-or-connect-without-stat.input';
import { CharacteristicsUpsertWithWhereUniqueWithoutStatInput } from './characteristics-upsert-with-where-unique-without-stat.input';
import type { Identity } from 'identity-type';
import { CharacteristicsCreateManyStatInputEnvelope } from './characteristics-create-many-stat-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { CharacteristicsWhereUniqueInput } from './characteristics-where-unique.input';
import { CharacteristicsUpdateWithWhereUniqueWithoutStatInput } from './characteristics-update-with-where-unique-without-stat.input';
import { CharacteristicsUpdateManyWithWhereWithoutStatInput } from './characteristics-update-many-with-where-without-stat.input';
import { CharacteristicsScalarWhereInput } from './characteristics-scalar-where.input';

@InputType()
export class CharacteristicsUpdateManyWithoutStatNestedInput {

    @Field(() => [CharacteristicsCreateWithoutStatInput], {nullable:true})
    @Type(() => CharacteristicsCreateWithoutStatInput)
    create?: Array<CharacteristicsCreateWithoutStatInput>;

    @Field(() => [CharacteristicsCreateOrConnectWithoutStatInput], {nullable:true})
    @Type(() => CharacteristicsCreateOrConnectWithoutStatInput)
    connectOrCreate?: Array<CharacteristicsCreateOrConnectWithoutStatInput>;

    @Field(() => [CharacteristicsUpsertWithWhereUniqueWithoutStatInput], {nullable:true})
    @Type(() => CharacteristicsUpsertWithWhereUniqueWithoutStatInput)
    upsert?: Array<CharacteristicsUpsertWithWhereUniqueWithoutStatInput>;

    @Field(() => CharacteristicsCreateManyStatInputEnvelope, {nullable:true})
    @Type(() => CharacteristicsCreateManyStatInputEnvelope)
    createMany?: Identity<CharacteristicsCreateManyStatInputEnvelope>;

    @Field(() => [CharacteristicsWhereUniqueInput], {nullable:true})
    @Type(() => CharacteristicsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CharacteristicsWhereUniqueInput, 'id'>>;

    @Field(() => [CharacteristicsWhereUniqueInput], {nullable:true})
    @Type(() => CharacteristicsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CharacteristicsWhereUniqueInput, 'id'>>;

    @Field(() => [CharacteristicsWhereUniqueInput], {nullable:true})
    @Type(() => CharacteristicsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CharacteristicsWhereUniqueInput, 'id'>>;

    @Field(() => [CharacteristicsWhereUniqueInput], {nullable:true})
    @Type(() => CharacteristicsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CharacteristicsWhereUniqueInput, 'id'>>;

    @Field(() => [CharacteristicsUpdateWithWhereUniqueWithoutStatInput], {nullable:true})
    @Type(() => CharacteristicsUpdateWithWhereUniqueWithoutStatInput)
    update?: Array<CharacteristicsUpdateWithWhereUniqueWithoutStatInput>;

    @Field(() => [CharacteristicsUpdateManyWithWhereWithoutStatInput], {nullable:true})
    @Type(() => CharacteristicsUpdateManyWithWhereWithoutStatInput)
    updateMany?: Array<CharacteristicsUpdateManyWithWhereWithoutStatInput>;

    @Field(() => [CharacteristicsScalarWhereInput], {nullable:true})
    @Type(() => CharacteristicsScalarWhereInput)
    deleteMany?: Array<CharacteristicsScalarWhereInput>;
}
