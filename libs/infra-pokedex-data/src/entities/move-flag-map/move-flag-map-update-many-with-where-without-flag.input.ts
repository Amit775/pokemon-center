import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveFlagMapScalarWhereInput } from './move-flag-map-scalar-where.input';
import { Type } from 'class-transformer';
import { MoveFlagMapUncheckedUpdateManyWithoutFlagInput } from './move-flag-map-unchecked-update-many-without-flag.input';

@InputType()
export class MoveFlagMapUpdateManyWithWhereWithoutFlagInput {

    @Field(() => MoveFlagMapScalarWhereInput, {nullable:false})
    @Type(() => MoveFlagMapScalarWhereInput)
    where!: Identity<MoveFlagMapScalarWhereInput>;

    @Field(() => MoveFlagMapUncheckedUpdateManyWithoutFlagInput, {nullable:false})
    @Type(() => MoveFlagMapUncheckedUpdateManyWithoutFlagInput)
    data!: Identity<MoveFlagMapUncheckedUpdateManyWithoutFlagInput>;
}
