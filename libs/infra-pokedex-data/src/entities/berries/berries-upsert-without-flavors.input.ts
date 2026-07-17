import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerriesUpdateWithoutFlavorsInput } from './berries-update-without-flavors.input';
import { Type } from 'class-transformer';
import { BerriesCreateWithoutFlavorsInput } from './berries-create-without-flavors.input';
import { BerriesWhereInput } from './berries-where.input';

@InputType()
export class BerriesUpsertWithoutFlavorsInput {

    @Field(() => BerriesUpdateWithoutFlavorsInput, {nullable:false})
    @Type(() => BerriesUpdateWithoutFlavorsInput)
    update!: Identity<BerriesUpdateWithoutFlavorsInput>;

    @Field(() => BerriesCreateWithoutFlavorsInput, {nullable:false})
    @Type(() => BerriesCreateWithoutFlavorsInput)
    create!: Identity<BerriesCreateWithoutFlavorsInput>;

    @Field(() => BerriesWhereInput, {nullable:true})
    @Type(() => BerriesWhereInput)
    where?: Identity<BerriesWhereInput>;
}
