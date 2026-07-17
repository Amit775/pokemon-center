import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveFlagMapScalarWhereInput } from './move-flag-map-scalar-where.input';
import { Type } from 'class-transformer';
import { MoveFlagMapUncheckedUpdateManyWithoutFlagInput } from './move-flag-map-unchecked-update-many-without-flag.input';

@InputType()
export class MoveFlagMapUpdateManyWithWhereWithoutFlagInput {

    @Field(() => MoveFlagMapScalarWhereInput, {nullable:false})
    @Type(() => MoveFlagMapScalarWhereInput)
    where!: MoveFlagMapScalarWhereInput;

    @Field(() => MoveFlagMapUncheckedUpdateManyWithoutFlagInput, {nullable:false})
    @Type(() => MoveFlagMapUncheckedUpdateManyWithoutFlagInput)
    data!: MoveFlagMapUncheckedUpdateManyWithoutFlagInput;
}
