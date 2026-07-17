import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { CharacteristicsWhereUniqueInput } from './characteristics-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { CharacteristicsUpdateWithoutStatInput } from './characteristics-update-without-stat.input';
import { CharacteristicsCreateWithoutStatInput } from './characteristics-create-without-stat.input';

@InputType()
export class CharacteristicsUpsertWithWhereUniqueWithoutStatInput {

    @Field(() => CharacteristicsWhereUniqueInput, {nullable:false})
    @Type(() => CharacteristicsWhereUniqueInput)
    where!: Prisma.AtLeast<CharacteristicsWhereUniqueInput, 'id'>;

    @Field(() => CharacteristicsUpdateWithoutStatInput, {nullable:false})
    @Type(() => CharacteristicsUpdateWithoutStatInput)
    update!: Identity<CharacteristicsUpdateWithoutStatInput>;

    @Field(() => CharacteristicsCreateWithoutStatInput, {nullable:false})
    @Type(() => CharacteristicsCreateWithoutStatInput)
    create!: Identity<CharacteristicsCreateWithoutStatInput>;
}
