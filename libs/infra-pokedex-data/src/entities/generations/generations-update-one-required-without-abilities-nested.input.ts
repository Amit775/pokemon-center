import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsCreateWithoutAbilitiesInput } from './generations-create-without-abilities.input';
import { Type } from 'class-transformer';
import { GenerationsCreateOrConnectWithoutAbilitiesInput } from './generations-create-or-connect-without-abilities.input';
import { GenerationsUpsertWithoutAbilitiesInput } from './generations-upsert-without-abilities.input';
import { Prisma } from '@pokemon-center/prisma';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { GenerationsUpdateToOneWithWhereWithoutAbilitiesInput } from './generations-update-to-one-with-where-without-abilities.input';

@InputType()
export class GenerationsUpdateOneRequiredWithoutAbilitiesNestedInput {

    @Field(() => GenerationsCreateWithoutAbilitiesInput, {nullable:true})
    @Type(() => GenerationsCreateWithoutAbilitiesInput)
    create?: Identity<GenerationsCreateWithoutAbilitiesInput>;

    @Field(() => GenerationsCreateOrConnectWithoutAbilitiesInput, {nullable:true})
    @Type(() => GenerationsCreateOrConnectWithoutAbilitiesInput)
    connectOrCreate?: Identity<GenerationsCreateOrConnectWithoutAbilitiesInput>;

    @Field(() => GenerationsUpsertWithoutAbilitiesInput, {nullable:true})
    @Type(() => GenerationsUpsertWithoutAbilitiesInput)
    upsert?: Identity<GenerationsUpsertWithoutAbilitiesInput>;

    @Field(() => GenerationsWhereUniqueInput, {nullable:true})
    @Type(() => GenerationsWhereUniqueInput)
    connect?: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsUpdateToOneWithWhereWithoutAbilitiesInput, {nullable:true})
    @Type(() => GenerationsUpdateToOneWithWhereWithoutAbilitiesInput)
    update?: Identity<GenerationsUpdateToOneWithWhereWithoutAbilitiesInput>;
}
