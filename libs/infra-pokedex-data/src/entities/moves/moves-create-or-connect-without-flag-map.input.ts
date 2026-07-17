import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MovesCreateWithoutFlagMapInput } from './moves-create-without-flag-map.input';

@InputType()
export class MovesCreateOrConnectWithoutFlagMapInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateWithoutFlagMapInput, {nullable:false})
    @Type(() => MovesCreateWithoutFlagMapInput)
    create!: Identity<MovesCreateWithoutFlagMapInput>;
}
