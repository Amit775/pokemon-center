import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerriesWhereInput } from './berries-where.input';
import { Type } from 'class-transformer';
import { BerriesUpdateWithoutFlavorsInput } from './berries-update-without-flavors.input';

@InputType()
export class BerriesUpdateToOneWithWhereWithoutFlavorsInput {

    @Field(() => BerriesWhereInput, {nullable:true})
    @Type(() => BerriesWhereInput)
    where?: Identity<BerriesWhereInput>;

    @Field(() => BerriesUpdateWithoutFlavorsInput, {nullable:false})
    @Type(() => BerriesUpdateWithoutFlavorsInput)
    data!: Identity<BerriesUpdateWithoutFlavorsInput>;
}
