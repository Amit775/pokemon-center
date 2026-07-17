import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CharacteristicsWhereUniqueInput } from './characteristics-where-unique.input';
import { Type } from 'class-transformer';
import { CharacteristicsUpdateWithoutStatInput } from './characteristics-update-without-stat.input';

@InputType()
export class CharacteristicsUpdateWithWhereUniqueWithoutStatInput {

    @Field(() => CharacteristicsWhereUniqueInput, {nullable:false})
    @Type(() => CharacteristicsWhereUniqueInput)
    where!: Prisma.AtLeast<CharacteristicsWhereUniqueInput, 'id'>;

    @Field(() => CharacteristicsUpdateWithoutStatInput, {nullable:false})
    @Type(() => CharacteristicsUpdateWithoutStatInput)
    data!: CharacteristicsUpdateWithoutStatInput;
}
