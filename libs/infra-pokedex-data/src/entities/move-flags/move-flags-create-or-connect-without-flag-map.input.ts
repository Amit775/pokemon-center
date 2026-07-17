import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MoveFlagsWhereUniqueInput } from './move-flags-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MoveFlagsCreateWithoutFlagMapInput } from './move-flags-create-without-flag-map.input';

@InputType()
export class MoveFlagsCreateOrConnectWithoutFlagMapInput {

    @Field(() => MoveFlagsWhereUniqueInput, {nullable:false})
    @Type(() => MoveFlagsWhereUniqueInput)
    where!: Prisma.AtLeast<MoveFlagsWhereUniqueInput, 'id'>;

    @Field(() => MoveFlagsCreateWithoutFlagMapInput, {nullable:false})
    @Type(() => MoveFlagsCreateWithoutFlagMapInput)
    create!: Identity<MoveFlagsCreateWithoutFlagMapInput>;
}
