import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonItemsCreateWithoutItemInput } from './pokemon-items-create-without-item.input';
import { Type } from 'class-transformer';
import { PokemonItemsCreateOrConnectWithoutItemInput } from './pokemon-items-create-or-connect-without-item.input';
import { PokemonItemsUpsertWithWhereUniqueWithoutItemInput } from './pokemon-items-upsert-with-where-unique-without-item.input';
import { PokemonItemsCreateManyItemInputEnvelope } from './pokemon-items-create-many-item-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonItemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { PokemonItemsUpdateWithWhereUniqueWithoutItemInput } from './pokemon-items-update-with-where-unique-without-item.input';
import { PokemonItemsUpdateManyWithWhereWithoutItemInput } from './pokemon-items-update-many-with-where-without-item.input';
import { PokemonItemsScalarWhereInput } from './pokemon-items-scalar-where.input';

@InputType()
export class PokemonItemsUpdateManyWithoutItemNestedInput {

    @Field(() => [PokemonItemsCreateWithoutItemInput], {nullable:true})
    @Type(() => PokemonItemsCreateWithoutItemInput)
    create?: Array<PokemonItemsCreateWithoutItemInput>;

    @Field(() => [PokemonItemsCreateOrConnectWithoutItemInput], {nullable:true})
    @Type(() => PokemonItemsCreateOrConnectWithoutItemInput)
    connectOrCreate?: Array<PokemonItemsCreateOrConnectWithoutItemInput>;

    @Field(() => [PokemonItemsUpsertWithWhereUniqueWithoutItemInput], {nullable:true})
    @Type(() => PokemonItemsUpsertWithWhereUniqueWithoutItemInput)
    upsert?: Array<PokemonItemsUpsertWithWhereUniqueWithoutItemInput>;

    @Field(() => PokemonItemsCreateManyItemInputEnvelope, {nullable:true})
    @Type(() => PokemonItemsCreateManyItemInputEnvelope)
    createMany?: PokemonItemsCreateManyItemInputEnvelope;

    @Field(() => [PokemonItemsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonItemsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>>;

    @Field(() => [PokemonItemsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonItemsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>>;

    @Field(() => [PokemonItemsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonItemsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>>;

    @Field(() => [PokemonItemsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonItemsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>>;

    @Field(() => [PokemonItemsUpdateWithWhereUniqueWithoutItemInput], {nullable:true})
    @Type(() => PokemonItemsUpdateWithWhereUniqueWithoutItemInput)
    update?: Array<PokemonItemsUpdateWithWhereUniqueWithoutItemInput>;

    @Field(() => [PokemonItemsUpdateManyWithWhereWithoutItemInput], {nullable:true})
    @Type(() => PokemonItemsUpdateManyWithWhereWithoutItemInput)
    updateMany?: Array<PokemonItemsUpdateManyWithWhereWithoutItemInput>;

    @Field(() => [PokemonItemsScalarWhereInput], {nullable:true})
    @Type(() => PokemonItemsScalarWhereInput)
    deleteMany?: Array<PokemonItemsScalarWhereInput>;
}
