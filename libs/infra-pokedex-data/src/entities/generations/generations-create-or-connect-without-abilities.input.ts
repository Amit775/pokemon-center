import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { GenerationsCreateWithoutAbilitiesInput } from './generations-create-without-abilities.input';

@InputType()
export class GenerationsCreateOrConnectWithoutAbilitiesInput {

    @Field(() => GenerationsWhereUniqueInput, {nullable:false})
    @Type(() => GenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsCreateWithoutAbilitiesInput, {nullable:false})
    @Type(() => GenerationsCreateWithoutAbilitiesInput)
    create!: Identity<GenerationsCreateWithoutAbilitiesInput>;
}
