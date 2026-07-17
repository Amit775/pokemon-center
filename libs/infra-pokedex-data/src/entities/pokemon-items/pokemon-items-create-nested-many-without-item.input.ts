import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonItemsCreateWithoutItemInput } from './pokemon-items-create-without-item.input';
import { Type } from 'class-transformer';
import { PokemonItemsCreateOrConnectWithoutItemInput } from './pokemon-items-create-or-connect-without-item.input';
import { PokemonItemsCreateManyItemInputEnvelope } from './pokemon-items-create-many-item-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokemonItemsWhereUniqueInput } from './pokemon-items-where-unique.input';

@InputType()
export class PokemonItemsCreateNestedManyWithoutItemInput {

    @Field(() => [PokemonItemsCreateWithoutItemInput], {nullable:true})
    @Type(() => PokemonItemsCreateWithoutItemInput)
    create?: Array<PokemonItemsCreateWithoutItemInput>;

    @Field(() => [PokemonItemsCreateOrConnectWithoutItemInput], {nullable:true})
    @Type(() => PokemonItemsCreateOrConnectWithoutItemInput)
    connectOrCreate?: Array<PokemonItemsCreateOrConnectWithoutItemInput>;

    @Field(() => PokemonItemsCreateManyItemInputEnvelope, {nullable:true})
    @Type(() => PokemonItemsCreateManyItemInputEnvelope)
    createMany?: PokemonItemsCreateManyItemInputEnvelope;

    @Field(() => [PokemonItemsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonItemsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>>;
}
