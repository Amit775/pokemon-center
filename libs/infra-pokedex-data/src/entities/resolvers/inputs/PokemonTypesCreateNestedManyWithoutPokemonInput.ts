import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonTypesCreateManyPokemonInputEnvelope } from "../inputs/PokemonTypesCreateManyPokemonInputEnvelope";
import { PokemonTypesCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonTypesCreateOrConnectWithoutPokemonInput";
import { PokemonTypesCreateWithoutPokemonInput } from "../inputs/PokemonTypesCreateWithoutPokemonInput";
import { PokemonTypesWhereUniqueInput } from "../inputs/PokemonTypesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonTypesCreateNestedManyWithoutPokemonInput", {})
export class PokemonTypesCreateNestedManyWithoutPokemonInput {
  @TypeGraphQL.Field(_type => [PokemonTypesCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonTypesCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonTypesCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonTypesCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonTypesCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonTypesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonTypesWhereUniqueInput[] | undefined;
}
