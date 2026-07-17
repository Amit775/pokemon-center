import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { GenerationsCreateWithoutLocationGameIndicesInput } from './generations-create-without-location-game-indices.input';

@InputType()
export class GenerationsCreateOrConnectWithoutLocationGameIndicesInput {

    @Field(() => GenerationsWhereUniqueInput, {nullable:false})
    @Type(() => GenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsCreateWithoutLocationGameIndicesInput, {nullable:false})
    @Type(() => GenerationsCreateWithoutLocationGameIndicesInput)
    create!: Identity<GenerationsCreateWithoutLocationGameIndicesInput>;
}
