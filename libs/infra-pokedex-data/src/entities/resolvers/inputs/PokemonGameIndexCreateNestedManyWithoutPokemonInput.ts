import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndexCreateManyPokemonInputEnvelope } from "../inputs/PokemonGameIndexCreateManyPokemonInputEnvelope";
import { PokemonGameIndexCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonGameIndexCreateOrConnectWithoutPokemonInput";
import { PokemonGameIndexCreateWithoutPokemonInput } from "../inputs/PokemonGameIndexCreateWithoutPokemonInput";
import { PokemonGameIndexWhereUniqueInput } from "../inputs/PokemonGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("PokemonGameIndexCreateNestedManyWithoutPokemonInput", {})
export class PokemonGameIndexCreateNestedManyWithoutPokemonInput {
  @TypeGraphQL.Field(_type => [PokemonGameIndexCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonGameIndexCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonGameIndexCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndexCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonGameIndexCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonGameIndexWhereUniqueInput[] | undefined;
}
