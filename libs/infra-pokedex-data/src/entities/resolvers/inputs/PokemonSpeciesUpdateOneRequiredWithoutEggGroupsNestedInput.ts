import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateOrConnectWithoutEggGroupsInput } from "../inputs/PokemonSpeciesCreateOrConnectWithoutEggGroupsInput";
import { PokemonSpeciesCreateWithoutEggGroupsInput } from "../inputs/PokemonSpeciesCreateWithoutEggGroupsInput";
import { PokemonSpeciesUpdateToOneWithWhereWithoutEggGroupsInput } from "../inputs/PokemonSpeciesUpdateToOneWithWhereWithoutEggGroupsInput";
import { PokemonSpeciesUpsertWithoutEggGroupsInput } from "../inputs/PokemonSpeciesUpsertWithoutEggGroupsInput";
import { PokemonSpeciesWhereUniqueInput } from "../inputs/PokemonSpeciesWhereUniqueInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateOneRequiredWithoutEggGroupsNestedInput", {})
export class PokemonSpeciesUpdateOneRequiredWithoutEggGroupsNestedInput {
  @TypeGraphQL.Field(_type => PokemonSpeciesCreateWithoutEggGroupsInput, {
    nullable: true
  })
  create?: PokemonSpeciesCreateWithoutEggGroupsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateOrConnectWithoutEggGroupsInput, {
    nullable: true
  })
  connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutEggGroupsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpsertWithoutEggGroupsInput, {
    nullable: true
  })
  upsert?: PokemonSpeciesUpsertWithoutEggGroupsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonSpeciesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateToOneWithWhereWithoutEggGroupsInput, {
    nullable: true
  })
  update?: PokemonSpeciesUpdateToOneWithWhereWithoutEggGroupsInput | undefined;
}
