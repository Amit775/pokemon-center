import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonCreateWithoutFormsInput } from './pokemon-create-without-forms.input';
import { Type } from 'class-transformer';
import { PokemonCreateOrConnectWithoutFormsInput } from './pokemon-create-or-connect-without-forms.input';
import { PokemonUpsertWithoutFormsInput } from './pokemon-upsert-without-forms.input';
import { Prisma } from '@prisma/client';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { PokemonUpdateToOneWithWhereWithoutFormsInput } from './pokemon-update-to-one-with-where-without-forms.input';

@InputType()
export class PokemonUpdateOneRequiredWithoutFormsNestedInput {

    @Field(() => PokemonCreateWithoutFormsInput, {nullable:true})
    @Type(() => PokemonCreateWithoutFormsInput)
    create?: PokemonCreateWithoutFormsInput;

    @Field(() => PokemonCreateOrConnectWithoutFormsInput, {nullable:true})
    @Type(() => PokemonCreateOrConnectWithoutFormsInput)
    connectOrCreate?: PokemonCreateOrConnectWithoutFormsInput;

    @Field(() => PokemonUpsertWithoutFormsInput, {nullable:true})
    @Type(() => PokemonUpsertWithoutFormsInput)
    upsert?: PokemonUpsertWithoutFormsInput;

    @Field(() => PokemonWhereUniqueInput, {nullable:true})
    @Type(() => PokemonWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;

    @Field(() => PokemonUpdateToOneWithWhereWithoutFormsInput, {nullable:true})
    @Type(() => PokemonUpdateToOneWithWhereWithoutFormsInput)
    update?: PokemonUpdateToOneWithWhereWithoutFormsInput;
}
